package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.SellerHandlingException;
import com.app.dao.SellerRepository;
import com.app.pojos.Seller;

@Service
@Transactional
public class SellerServiceImpl implements ISellerService {
	
	@Autowired
	private SellerRepository sellerRepo;

	@Override
	public Seller authenticateSeller(String email, String password) {
		
		return sellerRepo.findByEmailAndPassword(email, password).orElseThrow(()->new SellerHandlingException("Invalid login credentials"));
	}

	
	

}
