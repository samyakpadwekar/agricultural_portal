package com.app.pojos;

public class OrderDetails {
//	OrderDetailsId	OrderId	ProductId	Price	Quantity	Discount 	Total
	private Integer orderDetailsId;
	private int orderId;
	private int productId;
	private double price;
	private int quntity;
	private double discount;
	private double totalAmt;

	public OrderDetails() {
	}

	public OrderDetails(Integer orderDetailsId, int orderId, int productId, double price, int quntity, double discount,
			double totalAmt) {
		super();
		this.orderDetailsId = orderDetailsId;
		this.orderId = orderId;
		this.productId = productId;
		this.price = price;
		this.quntity = quntity;
		this.discount = discount;
		this.totalAmt = totalAmt;
	}

	public Integer getOrderDetailsId() {
		return orderDetailsId;
	}

	public void setOrderDetailsId(Integer orderDetailsId) {
		this.orderDetailsId = orderDetailsId;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQuntity() {
		return quntity;
	}

	public void setQuntity(int quntity) {
		this.quntity = quntity;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public double getTotalAmt() {
		return totalAmt;
	}

	public void setTotalAmt(double totalAmt) {
		this.totalAmt = totalAmt;
	}

}
