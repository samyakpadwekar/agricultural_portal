package com.app.dto;

import javax.validation.constraints.NotNull;

import com.app.pojos.Cart;
import com.app.pojos.Product;

public class AddToCartDto {
	 	private Integer id;
	    private Integer userId;
	    private @NotNull Integer productId;
	    private @NotNull int quantity;

	    public AddToCartDto() {
	    }

	    public AddToCartDto(Integer id,Integer userId,Integer productId,int quantity) {
	        this.id = id;
	        this.userId = userId;
	        this.productId = productId;
	        this.quantity = quantity;
	    }

	    public AddToCartDto(Cart cart) {
	        this.setId(cart.getId());
	        this.setProductId(cart.getProduct().getProductId());
	        this.setUserId(cart.getUser().getUserId());
	        this.setQuantity(cart.getQuantity());
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


		public Integer getProductId() {
			return productId;
		}

		public void setProductId(Integer productId) {
			this.productId = productId;
		}

		public Integer getQuantity() {
			return quantity;
		}

		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}

		@Override
	    public String toString() {
	        return "CartDto{" +
	                "id=" + id +
	                ", userId=" + userId +
	                ", productId=" + productId +
	                ", quantity=" + quantity +
	                "}";
	    }

}
