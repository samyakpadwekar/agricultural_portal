package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class ProductCatalogue {
//	productUid	Product name
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer productUid;
	
	@Column(length = 40, unique = true, nullable = false)
	private String productName;

	public ProductCatalogue() {
		// TODO Auto-generated constructor stub
	}

	public ProductCatalogue(Integer productUid, String productName) {
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
		return "ProductCatalogue [productUid=" + productUid + ", productName=" + productName + "]";
	}
	
}
