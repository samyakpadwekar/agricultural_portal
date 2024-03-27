package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "cart")
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(name = "created_date")
	private LocalDate createdDate;
	
	@Column(name = "user_id")
    private @NotNull Integer userId;
	
	@Column(name = "pid")
    private @NotNull Integer productId;
	
	private @NotNull Integer sellerId;
	
	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "user_id", insertable = false, updatable = false)
	private User user;

	
	@ManyToOne
	@JoinColumn(name = "pid", referencedColumnName = "productId", insertable = false, updatable = false)
	private Product product;

	private int quantity;

	public Cart() {
	}

	public Cart( int userId, int productId, int quantity, int sellerId) {
		super();
		
		this.userId = userId;
		this.createdDate = LocalDate.now();
		this.productId = productId;
		this.quantity = quantity;
		this.sellerId = sellerId;
	}

	public Cart(Integer id, LocalDate createdDate, @NotNull Integer userId, @NotNull Integer productId,
			@NotNull Integer sellerId, User user, Product product, int quantity) {
		super();
		this.id = id;
		this.createdDate = createdDate;
		this.userId = userId;
		this.productId = productId;
		this.sellerId = sellerId;
		this.user = user;
		this.product = product;
		this.quantity = quantity;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public LocalDate getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(LocalDate createdDate) {
		this.createdDate = createdDate;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
	
	public Integer getSellerId() {
		return sellerId;
	}

	public void setSellerId(Integer sellerId) {
		this.sellerId = sellerId;
	}

	@Override
	public String toString() {
		return "Cart [id=" + id + ", createdDate=" + createdDate + ", quantity=" + quantity + "]";
	}

}
