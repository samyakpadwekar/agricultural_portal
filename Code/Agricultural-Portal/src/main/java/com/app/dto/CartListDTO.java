package com.app.dto;

import java.util.List;

import com.app.pojos.Cart;

public class CartListDTO {
	private List<Cart> cartItems;
    private double totalCost;

    public CartListDTO() {
	}

    public CartListDTO(List<Cart> cartItems, double totalCost) {
		super();
		this.cartItems = cartItems;
		this.totalCost = totalCost;
	}
    
	public List<Cart> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<Cart> cartItems) {
		this.cartItems = cartItems;
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
