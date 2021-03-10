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
	@JoinColumn(name = "category_id", nullable = false)
	private Category category;

	@NotNull
	private double price;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "seller_id", nullable = false)
	private User seller;

	private int unitsStock;

	private int unitsSold;

	private double discount;

	private double avgRating;
	@Lob
	private byte[] picture;

	public Product() {
	}

	public Product(Integer productId, @NotBlank(message = "required") String productName,
			@NotBlank(message = "required") String productDescription, Category category, @NotNull double price,
			User seller, int unitsStock, int unitsSold, double discount, double avgRating, byte[] picture) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.category = category;
		this.price = price;
		this.seller = seller;
		this.unitsStock = unitsStock;
		this.unitsSold = unitsSold;
		this.discount = discount;
		this.avgRating = avgRating;
		this.picture = picture;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductDescription() {
		return productDescription;
	}

	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getUnitsStock() {
		return unitsStock;
	}

	public void setUnitsStock(int unitsStock) {
		this.unitsStock = unitsStock;
	}

	public int getUnitsSold() {
		return unitsSold;
	}

	public void setUnitsSold(int unitsSold) {
		this.unitsSold = unitsSold;
	}

	public double getDiscount() {
		return discount;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public double getAvgRating() {
		return avgRating;
	}

	public void setAvgRating(double avgRating) {
		this.avgRating = avgRating;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public User getSeller() {
		return seller;
	}

	public void setSeller(User seller) {
		this.seller = seller;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productDescription="
				+ productDescription + ", price=" + price + ", unitsStock=" + unitsStock + ", unitsSold=" + unitsSold
				+ ", discount=" + discount + ", avgRating=" + avgRating + "]";
	}

}
