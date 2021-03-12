package com.app.service;

import com.app.pojos.Seller;

public interface ISellerService {
	Seller authenticateSeller(String email,String password);
	
}
