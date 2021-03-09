package com.app.pojos;

import java.time.LocalDate;

public class Order {
//	OrderID	CustomerId	PaymentType	OrderDate	ShipDate	TransactionStatus	
//	EstimatedDelDate	PaymentDate	OrderStatus	BillDate	TotalAmount	PaidAmount
	private Integer orderId;
	private Integer custId;
	private String paymentType;
	private LocalDate orderDate;
	private LocalDate shipDate;
	private String txStatus;
	private LocalDate estimatedDeliveryDate;
	private LocalDate paymentDate;
	private String orderStatus;
	private LocalDate billDate;
	private Double totalAmt;
	private Double paidAmt;

	public Order() {
	}

	public Order(Integer orderId, Integer custId, String paymentType, LocalDate orderDate, LocalDate shipDate,
			String txStatus, LocalDate estimatedDeliveryDate, LocalDate paymentDate, String orderStatus,
			LocalDate billDate, Double totalAmt, Double paidAmt) {
		super();
		this.orderId = orderId;
		this.custId = custId;
		this.paymentType = paymentType;
		this.orderDate = orderDate;
		this.shipDate = shipDate;
		this.txStatus = txStatus;
		this.estimatedDeliveryDate = estimatedDeliveryDate;
		this.paymentDate = paymentDate;
		this.orderStatus = orderStatus;
		this.billDate = billDate;
		this.totalAmt = totalAmt;
		this.paidAmt = paidAmt;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public Integer getCustId() {
		return custId;
	}

	public void setCustId(Integer custId) {
		this.custId = custId;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public LocalDate getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDate orderDate) {
		this.orderDate = orderDate;
	}

	public LocalDate getShipDate() {
		return shipDate;
	}

	public void setShipDate(LocalDate shipDate) {
		this.shipDate = shipDate;
	}

	public String getTxStatus() {
		return txStatus;
	}

	public void setTxStatus(String txStatus) {
		this.txStatus = txStatus;
	}

	public LocalDate getEstimatedDeliveryDate() {
		return estimatedDeliveryDate;
	}

	public void setEstimatedDeliveryDate(LocalDate estimatedDeliveryDate) {
		this.estimatedDeliveryDate = estimatedDeliveryDate;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public LocalDate getBillDate() {
		return billDate;
	}

	public void setBillDate(LocalDate billDate) {
		this.billDate = billDate;
	}

	public Double getTotalAmt() {
		return totalAmt;
	}

	public void setTotalAmt(Double totalAmt) {
		this.totalAmt = totalAmt;
	}

	public Double getPaidAmt() {
		return paidAmt;
	}

	public void setPaidAmt(Double paidAmt) {
		this.paidAmt = paidAmt;
	}

}
