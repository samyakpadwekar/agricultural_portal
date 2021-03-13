package com.app.dto;

import com.app.pojos.Category;
import com.app.pojos.ProductCatalogue;
import com.app.pojos.Seller;

public class ProductDTO {
	
	private Integer productId;
	private ProductCatalogue productCatalogue;
	private String brandName;
//	private String productName;
	private String productDescription;
	private Category category;
	private double price;
	private Seller seller;
	private Integer unitsStock;
	private Integer unitsSold;
	private Double discount;
	private Double avgRating;
	private byte[] picture;
	
	public ProductDTO() {
		System.out.println("in ctor of productDTO");
	}

	public ProductDTO(Integer productId, ProductCatalogue productCatalogue, String brandName, 
			String productDescription, Category category, double price, Seller seller, Integer unitsStock,
			Integer unitsSold, Double discount, Double avgRating, byte[] picture) {
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

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Seller getSeller() {
		return seller;
	}

	public void setSeller(Seller seller) {
		this.seller = seller;
	}

	public Integer getUnitsStock() {
		return unitsStock;
	}

	public void setUnitsStock(Integer unitsStock) {
		this.unitsStock = unitsStock;
	}

	public Integer getUnitsSold() {
		return unitsSold;
	}

	public void setUnitsSold(Integer unitsSold) {
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

	@Override
	public String toString() {
		return "ProductDTO [productId=" + productId + ", brandName=" + brandName 
				+ ", productDescription=" + productDescription + ", price=" + price + ", unitsStock=" + unitsStock
				+ ", unitsSold=" + unitsSold + ", discount=" + discount + ", avgRating=" + avgRating + "]";
	}
	
	
	
}
