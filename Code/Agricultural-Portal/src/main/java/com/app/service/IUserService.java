package com.app.service;

import com.app.pojos.Seller;
import com.app.pojos.User;

public interface IUserService {
	User authenticateUser(String email, String password);
	
	Seller findSellerByBuisenessName(String name);
}
