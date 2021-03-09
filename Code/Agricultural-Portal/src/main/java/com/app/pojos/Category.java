package com.app.pojos;

public class Category {
//	CategoryId	Category_Name	Description	Picture
	private Integer catId;
	private String catName;
	private String description;
	private byte[] picture;

	public Category() {
	}

	public Category(Integer catId, String catName, String description, byte[] picture) {
		super();
		this.catId = catId;
		this.catName = catName;
		this.description = description;
		this.picture = picture;
	}

	public Integer getCatId() {
		return catId;
	}

	public void setCatId(Integer catId) {
		this.catId = catId;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public byte[] getPicture() {
		return picture;
	}

	public void setPicture(byte[] picture) {
		this.picture = picture;
	}

}
