package com.app.pojos;

public class Product {
//	productId	Product name	Product Description	Category_Id	Unit Price	SellerId	
//	Units_In_Stock	Units_sold	Discount_Available	Avg Rating	Picture
	private Integer pId;
	private String productName;
	private String productDescription;
	private Integer catId;
	private double price;
	private Integer sellerId;
	private int unitsStock;
	private int unitsSold;
	private double discount;
	private double avgRating;
	private byte[] picture;

	public Product() {
	}

	public Product(Integer pId, String productName, String productDescription, Integer catId, double price,
			Integer sellerId, int unitsStock, int unitsSold, double discount, double avgRating, byte[] picture) {
		super();
		this.pId = pId;
		this.productName = productName;
		this.productDescription = productDescription;
		this.catId = catId;
		this.price = price;
		this.sellerId = sellerId;
		this.unitsStock = unitsStock;
		this.unitsSold = unitsSold;
		this.discount = discount;
		this.avgRating = avgRating;
		this.picture = picture;
	}

	public Integer getpId() {
		return pId;
	}

	public void setpId(Integer pId) {
		this.pId = pId;
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

	public Integer getCatId() {
		return catId;
	}

	public void setCatId(Integer catId) {
		this.catId = catId;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public Integer getSellerId() {
		return sellerId;
	}

	public void setSellerId(Integer sellerId) {
		this.sellerId = sellerId;
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

}
