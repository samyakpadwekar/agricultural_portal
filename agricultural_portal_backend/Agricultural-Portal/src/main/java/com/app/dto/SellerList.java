package com.app.dto;

import java.util.List;

import com.app.pojos.Seller;

public class SellerList {
	
	private List<Seller> sellerList;
	
    public SellerList(List<Seller> list) {
    	this.sellerList=list;
    }

	public List<Seller> getList() {
		return sellerList;
	}

	public void setList(List<Seller> list) {
		this.sellerList = list;
	}
	
	

}
