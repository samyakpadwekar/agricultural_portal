package com.app.service;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.OrderDetailsRepository;
import com.app.dao.OrderRepository;
import com.app.dao.UserRepository;
import com.app.dto.OrderListDTO;
import com.app.dto.SalesReportDTO;
import com.app.enums.OrderStatus;
import com.app.enums.PaymentType;
import com.app.enums.TransactionStatus;
import com.app.pojos.Cart;
import com.app.pojos.Order;
import com.app.pojos.OrderDetails;
import com.app.pojos.Product;
import com.app.pojos.User;

@Service
@Transactional
public class OrderServiceImpl implements IOrderService {

	@Autowired
	private OrderRepository orderRepo;

	@Autowired
	private CartRepository cartRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private OrderDetailsRepository ODetailsRepo;

	@Override
	public String cartCheckout(Integer userId) {
		System.out.println("in order service of user : "+userId);
		int[] sellers = cartRepo.findDistinctSellerId();
		System.out.println("Sellers : "+Arrays.toString(sellers));
		User buyer = userRepo.findById(userId).get();
		for (int i : sellers) {
			List<Cart> cartItems = cartRepo.findAllByUserIdAndSellerId(userId, i);
			
			Order order = new Order();
			order.setBuyer(buyer);
			order.setPaymentType(PaymentType.CASH);
			order.setOrderDate(LocalDateTime.now());
			order.setEstmDelvDate(order.getOrderDate().plusDays(4));
			order.setTransactionStatus(TransactionStatus.UNPAID);
			order.setOrderStatus(OrderStatus.RECEIVED);
			order.setTotalAmount(0.0);
			orderRepo.save(order);
			
			double orderTotal = 0.0;
			
			for (Cart c : cartItems) {
				OrderDetails od = new OrderDetails(order, c.getProduct(), c.getQuantity(), c.getProduct().getDiscount());				
				double total = od.getProduct().getPrice() * od.getQuantity() * (100 - ((c.getProduct().getDiscount()==null)?0:c.getProduct().getDiscount())) / 100;
				orderTotal += total;
				od.setTotal(total);
				ODetailsRepo.save(od);
			}
			Order sameOrder = orderRepo.findFirstByOrderByOrderIdDesc();
			sameOrder.setTotalAmount(orderTotal);
		}
	
		Integer deleteCount = cartRepo.deleteByUserId(userId);
		
		return "Order placed for user : "+userId+" deleteCount : "+deleteCount;
	}
	
	@Override
	public String confirmOrder(Integer orderId) {
		Order o = orderRepo.findById(orderId).get();
		if(o.getOrderStatus() == OrderStatus.CANCELLED || 
				o.getOrderStatus() == OrderStatus.DELIVERED ||
				o.getOrderStatus() == OrderStatus.DISPATCHED) {
			return "Order cannot be confirmed";
		}
		if(o.getOrderStatus() != OrderStatus.CONFIRMED) {
			List<OrderDetails> odList = ODetailsRepo.findAllByOrderOrderId(orderId);
			for (OrderDetails od : odList) {
				Product p = od.getProduct();
				//increase units_sold
				if(p.getUnitsStock() < od.getQuantity())
					return "Stock is insufficient for this order";
				p.setUnitsSold(p.getUnitsSold() + od.getQuantity());
				//decrease units_stock
				p.setUnitsStock(p.getUnitsStock() - od.getQuantity());
			}
			o.setOrderStatus(OrderStatus.CONFIRMED);
			return "Order "+orderId+" confirmed !";
		} 
		return "Order is already confirmed";
	}
	
	@Override
	public String cancelOrder(Integer orderId) {
		Order o = orderRepo.findById(orderId).get();
		if(o.getOrderStatus() == OrderStatus.RECEIVED)
			o.setOrderStatus(OrderStatus.CANCELLED);
		else 
			return "Order is CONFIRMED, can not be cancelled";
		orderRepo.save(o);
		return "Order "+orderId+" cancelled !";
	}
	
	@Override
	public String dispatchOrder(Integer orderId) {
		Order o = orderRepo.findById(orderId).get();
		if(o.getOrderStatus() == OrderStatus.CONFIRMED) {
			o.setOrderStatus(OrderStatus.DISPATCHED);
			o.setShipDate(LocalDateTime.now());
		}
		else 
			return "Order status must be CONFIRMED";
		orderRepo.save(o);
		return "Order "+orderId+" dispatched !";
	}
	
	@Override
	public String deliverOrder(Integer orderId) {
		Order o = orderRepo.findById(orderId).get();
		if(o.getOrderStatus() == OrderStatus.DISPATCHED) {
			o.setOrderStatus(OrderStatus.DELIVERED);
			o.setPaymentDate(LocalDateTime.now());
			o.setPaidAmount(o.getTotalAmount());
			o.setTransactionStatus(TransactionStatus.PAID);
		}
		else 
			return "Order status must be DISPATCHED";
		orderRepo.save(o);
		return "Order "+orderId+" delivered !";
	}

	@Override
	public List<SalesReportDTO> generateSalesReport() {
		LocalDateTime orderDate = LocalDateTime.now().minusMonths(1);
		List<SalesReportDTO> salesList = new LinkedList<SalesReportDTO>();
		List<Order> orderList = orderRepo.findAllByOrderDateGreaterThanEqual(orderDate);
		for (Order order : orderList) {
			salesList.add(new SalesReportDTO(order.getOrderId(), order.getBuyer().getUserId(), order.getOrderDate(),
					order.getTotalAmount()));
		}
		return salesList;

	}
	
	@Override
	public OrderListDTO getAllOrdersOfSeller(Integer sellerId) {
		System.out.println("in service of seller all orders");
		OrderListDTO dto = new OrderListDTO();
		List<OrderDetails> detailsList = ODetailsRepo.findOrderDetailsBySellerId(sellerId);
		for (OrderDetails od : detailsList) {
			if(!dto.getOrderList().contains(od.getOrder()))
				dto.getOrderList().add(od.getOrder());
		}
		return dto;
	}


}
