package com.app.pojos;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "categories")
public class Category {
//	CategoryId	Category_Name	Description	Picture
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer categoryId;
	@NotBlank(message = "required")
	@Column(length = 20)
	private String catName;
	@Column(length = 150)
	private String description;
	@Lob
	private byte[] picture;

	public Category() {
	}

	public Category(Integer catId, String catName, String description, byte[] picture) {
		super();
		this.categoryId = catId;
		this.catName = catName;
		this.description = description;
		this.picture = picture;
	}

	public Integer getCatId() {
		return categoryId;
	}

	public void setCatId(Integer catId) {
		this.categoryId = catId;
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
		return "Category [categoryId=" + categoryId + ", catName=" + catName + ", description=" + description + "]";
	}

}
