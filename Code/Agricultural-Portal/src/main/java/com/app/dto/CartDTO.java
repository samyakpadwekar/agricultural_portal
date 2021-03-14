package com.app.dto;

import java.util.List;

public class CartDTO {
	private List<CartItemDto> cartItems;
    private double totalCost;

    public CartDTO(List<CartItemDto> cartItemDtoList, double totalCost) {
        this.cartItems = cartItemDtoList;
        this.totalCost = totalCost;
    }

    public List<CartItemDto> getcartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItemDto> cartItemDtoList) {
        this.cartItems = cartItemDtoList;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(int totalCost) {
        this.totalCost = totalCost;
    }

	@Override
	public String toString() {
		return "CartDTO [cartItems=" + cartItems + ", totalCost=" + totalCost + "]";
	}
    
    
}
