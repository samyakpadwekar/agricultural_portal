package com.app.dto;

import java.util.List;

public class ProductReportList {
	
	private List<ProductReportDto> list;
	
	public ProductReportList(List<ProductReportDto> list) {
		this.list=list;
	}

	public List<ProductReportDto> getList() {
		return list;
	}

	public void setList(List<ProductReportDto> list) {
		this.list = list;
	}

	@Override
	public String toString() {
		return "ProductReportList [list=" + list + "]";
	}
	
	
	

}
