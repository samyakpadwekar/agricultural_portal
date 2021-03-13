package com.app.dto;

import javax.validation.constraints.NotNull;

import com.app.pojos.Product;

public class WishlistDTO {

	private int id;
	private @NotNull byte[] picture;
	private @NotNull String name;
	private @NotNull String description;
	private @NotNull double price;
	private @NotNull boolean inStock;
	//private @NotNull int categoryId;

	

	public WishlistDTO(Product product) {
		this.setId(product.getProductId());
		this.setName(product.getProductCatalogue().getProductName());
		this.setPicture(product.getPicture());
		this.setDescription(product.getProductDescription());
		this.setPrice(product.getPrice());
		//this.setCategoryId(product.getCategory().getCategoryId());
		this.setInStock(product.getUnitsStock());
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] pictureL) {
		this.picture = pictureL;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

//	public int getCategoryId() {
//		return categoryId;
//	}
//
//	public void setCategoryId(int categoryId) {
//		this.categoryId = categoryId;
//	}

	public boolean getInStock() {
		return inStock;
	}

	public void setInStock(int unitInStock) {
		if(unitInStock>0)
		this.inStock = true;
		else
			this.inStock = false;
	}
	
	
}
