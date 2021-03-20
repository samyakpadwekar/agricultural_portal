package com.app.dto;

import java.util.List;

import com.app.pojos.Product;

public class ProductList {
	
	private List<ProductDTO> productList;
	
	public ProductList() {
		System.out.println("in ctor of productList");
	}
	
	public ProductList(List<ProductDTO> list) {
		this.productList=list;
	}

	public List<ProductDTO> getProductList() {
		return productList;
	}

	public void setProductList(List<ProductDTO> productList) {
		this.productList = productList;
	}
}
