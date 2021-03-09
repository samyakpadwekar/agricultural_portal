package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "products")
public class Product {
//	productId	Product name	Product Description	Category_Id	Unit Price	SellerId	
//	Units_In_Stock	Units_sold	Discount_Available	Avg Rating	Picture
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer productId;
	
	@Column(length = 30)
	@NotBlank(message = "required")
	private String productName;
	
	@Column(length = 200)
	@NotBlank(message = "required")
	private String productDescription;
	
	@OneToOne	
	@JoinColumn(name = "category_id",nullable = false)
	private Category category;
	
	@NotNull
	private double price;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "seller_id",nullable = false)
	private User seller;
	
	private int unitsStock;
	
	private int unitsSold;
	
	private double discount;
	
	private double avgRating;
	@Lob
	private byte[] picture;
		

	public Product() {
	}

	

	

}
