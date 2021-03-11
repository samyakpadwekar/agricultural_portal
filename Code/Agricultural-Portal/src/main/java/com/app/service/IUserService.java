package com.app.service;

import java.util.List;

import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.User;

public interface IUserService {
	User authenticateUser(String email, String password);
	
	Seller findSellerByBuisenessName(String name);
	
	List<Product> findProductsByCategory(String categoryName);
	List<User> getAllCustomer();
}
