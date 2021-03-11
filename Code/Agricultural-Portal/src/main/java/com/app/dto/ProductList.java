package com.app.dto;

import java.util.List;

import com.app.pojos.Product;

public class ProductList {
	
	private List<Product> productList;
	
	public ProductList() {
		System.out.println("in ctor of productList");
	}
	
	public ProductList(List<Product> list) {
		this.productList=list;
	}

	public List<Product> getProductList() {
		return productList;
	}

	public void setProductList(List<Product> productList) {
		this.productList = productList;
	}
}
