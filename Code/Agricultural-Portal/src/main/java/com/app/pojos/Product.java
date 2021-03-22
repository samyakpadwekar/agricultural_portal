package com.app.pojos;

import javax.persistence.*;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "products", uniqueConstraints = @UniqueConstraint(columnNames = { "productUid", "seller_id" }))
public class Product {
//	productId	Product name	Product Description	Category_Id	Unit Price	SellerId	
//	Units_In_Stock	Units_sold	Discount_Available	Avg Rating	Picture
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer productId;

	@OneToOne
	@JoinColumn(name = "productUid")
	private ProductCatalogue productCatalogue;

	@Column(length = 50)
	private String brandName;

//	@Column(length = 30, nullable = false)
//	@NotBlank(message = "required")
//	private String productName;

	@Column(length = 200)
	@NotBlank(message = "required")
	private String productDescription;

	@JsonIgnoreProperties(value = "picture")
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "category_id", nullable = false)
	private Category category;

	@NotNull(message = "required")
	private double price;


	@ManyToOne
	@JoinColumn(name = "seller_id", nullable = false)
	private Seller seller;

	private Integer unitsStock;

	private Integer unitsSold;

	private Double discount;

	private Double avgRating;

	@Lob
	private byte[] picture;

	public Product() {
	}

	public Product(Integer productId, ProductCatalogue productCatalogue, String brandName,
			@NotBlank(message = "required") String productName,
			@NotBlank(message = "required") String productDescription, Category category,
			@NotNull(message = "required") double price, Seller seller, Integer unitsStock, Integer unitsSold,
			Double discount, Double avgRating, byte[] picture) {
		super();
		this.productId = productId;
		this.productCatalogue = productCatalogue;
		this.brandName = brandName;
//		this.productName = productName;
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

//	public String getProductName() {
//		return productName;
//	}
//
//	public void setProductName(String productName) {
//		this.productName = productName;
//	}

	public ProductCatalogue getProductCatalogue() {
		return productCatalogue;
	}

	public void setProductCatalogue(ProductCatalogue productCatalogue) {
		this.productCatalogue = productCatalogue;
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

	public Double getDiscount() {
		return discount;
	}

	public void setDiscount(Double discount) {
		this.discount = discount;
	}

	public Double getAvgRating() {
		return avgRating;
	}

	public void setAvgRating(Double avgRating) {
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

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	@Override
	public String toString() {
		return "Product [productId=" + productId + ", brandName=" + brandName + ", productDescription="
				+ productDescription + ", price=" + price + ", unitsStock=" + unitsStock + ", unitsSold=" + unitsSold
				+ ", discount=" + discount + ", avgRating=" + avgRating + "]";
	}

}
