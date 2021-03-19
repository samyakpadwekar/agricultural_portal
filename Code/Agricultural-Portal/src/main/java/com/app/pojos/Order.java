package com.app.pojos;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.*;

import com.app.enums.OrderStatus;
import com.app.enums.PaymentType;
import com.app.enums.TransactionStatus;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "orders")
public class Order {
//	OrderID	CustomerId	PaymentType	OrderDate	ShipDate	TransactionStatus	EstimatedDeliveryDate
//	PaymentDate	OrderStatus	TotalAmount	PaidAmount
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderId;
	
	@JsonIgnoreProperties("password")
	@ManyToOne
	@JoinColumn(name = "buyerId",  nullable = false)
	private User buyer;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private PaymentType paymentType;
	
	@Column(length = 30, nullable = false)
	private LocalDateTime orderDate;
	
	@Column(length = 30)
	private LocalDateTime shipDate;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private TransactionStatus transactionStatus;
	
	@Column(length = 30)
	private LocalDateTime estmDelvDate;
	
	@Column(length = 30)
	private LocalDateTime paymentDate;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 15, nullable = false)
	private OrderStatus orderStatus;
	
	@Column(nullable = false)
	private Double totalAmount;
	
	private Double paidAmount;
	
//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "order", orphanRemoval = true)
//	List<OrderDetails> orderDetails;
	
	public Order() {
		System.out.println("in order pojo");
	}

	public Order(Integer orderId, User buyer, PaymentType paymentType, LocalDateTime orderDate, LocalDateTime shipDate,
			TransactionStatus transactionStatus, LocalDateTime estmDelvDate, LocalDateTime paymentDate,
			OrderStatus orderStatus, Double totalAmount, Double paidAmount) {
		super();
		this.orderId = orderId;
		this.buyer = buyer;
		this.paymentType = paymentType;
		this.orderDate = orderDate;
		this.shipDate = shipDate;
		this.transactionStatus = transactionStatus;
		this.estmDelvDate = estmDelvDate;
		this.paymentDate = paymentDate;
		this.orderStatus = orderStatus;
		this.totalAmount = totalAmount;
		this.paidAmount = paidAmount;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public User getBuyer() {
		return buyer;
	}

	public void setBuyer(User buyer) {
		this.buyer = buyer;
	}

	public PaymentType getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(PaymentType paymentType) {
		this.paymentType = paymentType;
	}

	public LocalDateTime getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}

	public LocalDateTime getShipDate() {
		return shipDate;
	}

	public void setShipDate(LocalDateTime shipDate) {
		this.shipDate = shipDate;
	}

	public TransactionStatus getTransactionStatus() {
		return transactionStatus;
	}

	public void setTransactionStatus(TransactionStatus transactionStatus) {
		this.transactionStatus = transactionStatus;
	}

	public LocalDateTime getEstmDelvDate() {
		return estmDelvDate;
	}

	public void setEstmDelvDate(LocalDateTime estmDelvDate) {
		this.estmDelvDate = estmDelvDate;
	}

	public LocalDateTime getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDateTime paymentDate) {
		this.paymentDate = paymentDate;
	}

	public OrderStatus getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(OrderStatus orderStatus) {
		this.orderStatus = orderStatus;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public Double getPaidAmount() {
		return paidAmount;
	}

	public void setPaidAmount(Double paidAmount) {
		this.paidAmount = paidAmount;
	}
	
//	public List<OrderDetails> getOrderDetails() {
//		return orderDetails;
//	}
//
//	public void setOrderDetails(List<OrderDetails> orderDetails) {
//		this.orderDetails = orderDetails;
//	}

	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", paymentType=" + paymentType + ", orderDate=" + orderDate + ", shipDate="
				+ shipDate + ", transactionStatus=" + transactionStatus + ", estmDelvDate=" + estmDelvDate
				+ ", paymentDate=" + paymentDate + ", orderStatus=" + orderStatus + ", totalAmount=" + totalAmount
				+ ", paidAmount=" + paidAmount + "]";
	}
	
	
}
