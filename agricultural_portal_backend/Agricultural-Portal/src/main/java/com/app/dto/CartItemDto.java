package com.app.dto;

import javax.validation.constraints.NotNull;

import com.app.pojos.Cart;
import com.app.pojos.Product;

public class CartItemDto {
	private Integer id;
	private @NotNull Integer userId;
	private @NotNull Integer quantity;
	private @NotNull Product product;

	public CartItemDto() {
	}

	public CartItemDto(Cart cart) {
		this.setId(cart.getId());
		this.setUserId(cart.getUser().getUserId());
		this.setQuantity(cart.getQuantity());
		this.setProduct(cart.getProduct());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String toString() {
		return "CartDto{" + "id=" + id + ", userId=" + userId + ", quantity=" + quantity + ", productName="
				+ product.getProductCatalogue().getProductName() + '}';
	}
}
