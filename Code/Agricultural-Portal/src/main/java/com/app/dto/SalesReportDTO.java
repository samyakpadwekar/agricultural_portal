package com.app.dto;

import java.time.LocalDateTime;

public class SalesReportDTO {
	private Integer orderId;
	
	private Integer buyerId;
	
	private LocalDateTime orderDate;
	
	private Double totalAmount;
	
	public SalesReportDTO() {
	}

	public SalesReportDTO(Integer orderId, Integer buyerId, LocalDateTime orderDate, Double totalAmount) {
		super();
		this.orderId = orderId;
		this.buyerId = buyerId;
		this.orderDate = orderDate;
		this.totalAmount = totalAmount;
	}

	public Integer getOrderId() {
		return orderId;
	}

	public void setOrderId(Integer orderId) {
		this.orderId = orderId;
	}

	public Integer getBuyerId() {
		return buyerId;
	}

	public void setBuyerId(Integer buyerId) {
		this.buyerId = buyerId;
	}

	public LocalDateTime getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(LocalDateTime orderDate) {
		this.orderDate = orderDate;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}

	@Override
	public String toString() {
		return "SalesReportDTO [orderId=" + orderId + ", buyerId=" + buyerId + ", orderDate=" + orderDate
				+ ", totalAmount=" + totalAmount + "]";
	}

		
	
}
