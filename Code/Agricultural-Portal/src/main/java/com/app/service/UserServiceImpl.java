package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.UserHandlingException;
import com.app.dao.SellerRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Seller;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private SellerRepository sellerRepo;
	
	
	
	@Override
	public User authenticateUser(String email, String password) {
		
		return userRepo.findByEmailAndPassword(email, password).orElseThrow(()-> new UserHandlingException("Invalid Credentials..!"));
	}

	@Override
	public Seller findSellerByBuisenessName(String businessName) {		
		return sellerRepo.findByBusinessName(businessName).orElseThrow(()->new UserHandlingException("Invalid Buiseness Name..!"));
	}

}
