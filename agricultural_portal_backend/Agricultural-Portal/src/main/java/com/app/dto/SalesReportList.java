package com.app.dto;

import java.util.List;

public class SalesReportList {
	private List<SalesReportDTO> salesList;
	public SalesReportList() {
		// TODO Auto-generated constructor stub
	}
	public SalesReportList(List<SalesReportDTO> salesList) {
		super();
		this.salesList = salesList;
	}
	public List<SalesReportDTO> getSalesList() {
		return salesList;
	}
	public void setSalesList(List<SalesReportDTO> salesList) {
		this.salesList = salesList;
	}
	@Override
	public String toString() {
		return "SalesReportList [salesList=" + salesList + "]";
	}
	
}
