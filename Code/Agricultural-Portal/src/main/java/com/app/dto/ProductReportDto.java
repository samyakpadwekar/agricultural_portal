package com.app.dto;

public class ProductReportDto {
	private String productName;
	private String sellerBusinessName;
	private int inStock;
	private int sold;
	private double avgPrice;
	private int rating;
	
	public ProductReportDto() {
		// TODO Auto-generated constructor stub
	}
	

	public String getSellerBusinessName() {
		return sellerBusinessName;
	}


	public void setSellerBusinessName(String sellerBusinessName) {
		this.sellerBusinessName = sellerBusinessName;
	}


	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getInStock() {
		return inStock;
	}

	public void setInStock(int inStock) {
		this.inStock = inStock;
	}

	public int getSold() {
		return sold;
	}

	public void setSold(int sold) {
		this.sold = sold;
	}

	public double getAvgPrice() {
		return avgPrice;
	}

	public void setAvgPrice(double avgPrice) {
		this.avgPrice = avgPrice;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}


	@Override
	public String toString() {
		return "ProductReportDto [productName=" + productName + ", sellerBusinessName=" + sellerBusinessName
				+ ", inStock=" + inStock + ", sold=" + sold + ", avgPrice=" + avgPrice + ", rating=" + rating + "]";
	}

	
	

}
