package com.app.service;

import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.OrderDetailsRepository;
import com.app.dao.OrderRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Cart;
import com.app.pojos.Order;
import com.app.pojos.OrderDetails;
import com.app.enums.OrderStatus;
import com.app.enums.TransactionStatus;

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
		List<Cart> cartItems = cartRepo.findAllByUserIdOrderByCreatedDateDesc(userId);
	
		Order order = new Order();
		order.setBuyer(userRepo.findById(userId).get());
//		order.setPaymentType(PaymentType.CARD);
		order.setOrderDate(LocalDateTime.now());
		order.setTransactionStatus(TransactionStatus.UNPAID);
		order.setOrderStatus(OrderStatus.RECEIVED);
		order.setTotalAmount(0.0);
		orderRepo.save(order);
		
		double orderTotal = 0.0;
		
		for (Cart cartItem : cartItems) {
			OrderDetails od = new OrderDetails(order, cartItem.getProduct(), cartItem.getQuantity(), cartItem.getProduct().getDiscount());				
			double total = od.getProduct().getPrice() * od.getQuantity() * ((cartItem.getProduct().getDiscount()==null)?0:cartItem.getProduct().getDiscount()) / 100;
			orderTotal += total;
			od.setTotal(total);
			ODetailsRepo.save(od);
		}
		Order sameOrder = orderRepo.findFirstByOrderByOrderIdDesc();
		System.out.println("same orderId : "+sameOrder.getOrderId());
		sameOrder.setTotalAmount(orderTotal);
		Integer deleteCount = cartRepo.deleteByUserId(userId);
		
		return "Order placed for user : "+userId+" Of total amount : "+order.getTotalAmount()+" deleteCount : "+deleteCount;
	}
	
	
	
}
