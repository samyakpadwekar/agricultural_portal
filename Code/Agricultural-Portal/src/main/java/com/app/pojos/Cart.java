package com.app.pojos;

public class Cart {
//	buyerId	productId	Count
	private int custId;
	private int productId;
	private int count;
	
	public Cart () {
	}

	public Cart(int custId, int productId, int count) {
		super();
		this.custId = custId;
		this.productId = productId;
		this.count = count;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}
	
}
