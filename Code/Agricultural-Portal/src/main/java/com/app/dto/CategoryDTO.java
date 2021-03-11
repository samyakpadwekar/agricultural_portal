package com.app.dto;

public class CategoryDTO {
	private Integer categoryId;
	private String catName;
	private String description;
	private byte[] picture;

	public CategoryDTO() {
	}

	public CategoryDTO(Integer categoryId, String catName, String description, byte[] picture) {
		super();
		this.categoryId = categoryId;
		this.catName = catName;
		this.description = description;
		this.picture = picture;
	}

	public Integer getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
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

	@Override
	public String toString() {
		return "CategoryDTO [categoryId=" + categoryId + ", catName=" + catName + ", description=" + description + "]";
	}

}
