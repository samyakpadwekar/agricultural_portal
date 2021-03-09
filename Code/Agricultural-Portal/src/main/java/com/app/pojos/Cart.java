package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class Cart {
	private int count;
	@OneToOne
	@JoinColumn(name="customer_id")
	private User customer;
	@OneToMany
	@JoinColumn(name="product_id")
	private List<Product> products=new ArrayList<>();
	public Cart () {
	}
	public Cart(int count, User customer, List<Product> products) {
		super();
		this.count = count;
		this.customer = customer;
		this.products = products;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	
	public User getCustomer() {
		return customer;
	}
	public void setCustomer(User customer) {
		this.customer = customer;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	
	
}
