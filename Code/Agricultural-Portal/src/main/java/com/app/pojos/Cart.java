package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;


@Entity
@Table(name="cart")
public class Cart {
	
	private int count;
	
	/*
	 * @OneToOne
	 * 
	 * @JoinColumn(name = "cart_id")
	 * 
	 * @MapsId
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	
	@OneToMany
	@JoinColumn(name="p_id")
	private List<Product> products=new ArrayList<>();
	
	
	
	
	public Cart () {
	}
	
	
	
	public Cart(int count, int cartId, List<Product> products) {
		super();
		this.count = count;
		this.cartId = cartId;
		this.products = products;
	}



	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	
	
	
}
