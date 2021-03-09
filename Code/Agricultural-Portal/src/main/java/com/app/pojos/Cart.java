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
//	buyerId	productId	Count
	private int count;
	@OneToOne(mappedBy = "custCart",cascade = CascadeType.ALL,orphanRemoval=true)
	@JoinColumn(name="Customer_id")
	private int custId;
	@OneToMany(mappedBy = "carts",cascade = CascadeType.ALL,orphanRemoval=true)
	private List<Product> product=new ArrayList<>();
	//private int productId;
	public Cart () {
	}
	public Cart(int count, int custId, List<Product> product) {
		super();
		this.count = count;
		this.custId = custId;
		this.product = product;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public int getCustId() {
		return custId;
	}
	public void setCustId(int custId) {
		this.custId = custId;
	}
	public List<Product> getProduct() {
		return product;
	}
	public void setProduct(List<Product> product) {
		this.product = product;
	}

	
	
}
