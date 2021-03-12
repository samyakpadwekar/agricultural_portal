package com.app.dto;

import java.util.List;

import com.app.pojos.Category;

public class CategoryList {
	
	private List<Category> categoriesList;
	
	public CategoryList() {
		// TODO Auto-generated constructor stub
	}
	
	public CategoryList(List<Category> list )
	{
		this.categoriesList=list;
	}

	public List<Category> getCategoriesList() {
		return categoriesList;
	}

	public void setCategoriesList(List<Category> categoriesList) {
		this.categoriesList = categoriesList;
	}
	

}
