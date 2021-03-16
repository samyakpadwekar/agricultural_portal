package com.app.pojos;

import javax.persistence.*;

@Entity
@Table(uniqueConstraints=@UniqueConstraint(columnNames={"order_id", "product_id"}))
public class OrderDetails {
//	OrderDetailsId	OrderId	ProductId	Price	Quantity	Discount 	Total
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer orderDetailsId;
	
	@ManyToOne
	@JoinColumn(name = "order_id", nullable = false)
	private Order order;
	
	@OneToOne
	@JoinColumn(name = "product_id", nullable = false)
	private Product product;
	
	@Column(nullable = false)
	private Integer quantity;
	
	private Double discount;
	
	@Column(nullable = false)
	private Double total;
	
	public OrderDetails() {
		System.out.println("in order details");
	}

	public OrderDetails(Integer orderDetailsId, Order order, Product product, Integer quantity, Double discount,
			Double total) {
		super();
		this.orderDetailsId = orderDetailsId;
		this.order = order;
		this.product = product;
		this.quantity = quantity;
		this.discount = discount;
		this.total = total;
	}
	
	public OrderDetails(Order order, Product product, Integer quantity, Double discount) {
		super();
		this.order = order;
		this.product = product;
		this.quantity = quantity;
		this.discount = discount;
	}

	public Integer getOrderDetailsId() {
		return orderDetailsId;
	}

	public void setOrderDetailsId(Integer orderDetailsId) {
		this.orderDetailsId = orderDetailsId;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	@Override
	public String toString() {
		return "OrderDetails [orderDetailsId=" + orderDetailsId + ", quantity=" + quantity + ", discount=" + discount
				+ ", total=" + total + "]";
	}
	
}
