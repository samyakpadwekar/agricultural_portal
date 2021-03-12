package com.app.service;

import java.util.List;

import com.app.pojos.Product;
import com.app.pojos.Seller;

public interface ISellerService {
	Seller authenticateSeller(String email,String password);
	List<Product> getAllProductsBySellerId(Integer sellerId);
}
