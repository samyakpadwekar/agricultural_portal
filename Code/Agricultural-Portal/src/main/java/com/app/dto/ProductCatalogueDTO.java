package com.app.dto;

public class ProductCatalogueDTO {
	private Integer productUid;
	private String productName;
	
	public ProductCatalogueDTO() {
	}

	public ProductCatalogueDTO(Integer productUid, String productName) {
		super();
		this.productUid = productUid;
		this.productName = productName;
	}

	public Integer getProductUid() {
		return productUid;
	}

	public void setProductUid(Integer productUid) {
		this.productUid = productUid;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	@Override
	public String toString() {
		return "ProductCatalogueDTO [productUid=" + productUid + ", productName=" + productName + "]";
	}
	

}
