package com.app.dto;

public class RestockProductDTO {
	private Integer productId;
	private Integer quantity;
	
	public RestockProductDTO() {
		
	}

	public RestockProductDTO(Integer productId, Integer quantity) {
		super();
		this.productId = productId;
		this.quantity = quantity;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	@Override
	public String toString() {
		return "RestockProductDTO [productId=" + productId + ", quantity=" + quantity + "]";
	}
	
	
}
