package com.app.dto;

import com.app.pojos.Seller;

public class SellerResponse {
  private Seller seller;
  public SellerResponse(Seller s) {
	  this.seller=s;
  }
  
  
  
public Seller getSeller() {
	return seller;
}
public void setSeller(Seller seller) {
	this.seller = seller;
}
  
}
