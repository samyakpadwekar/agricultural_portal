package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.SellerHandlingException;
import com.app.dao.ProductRepository;
import com.app.dao.SellerRepository;
import com.app.pojos.Product;
import com.app.pojos.Seller;

@Service
@Transactional
public class SellerServiceImpl implements ISellerService {
	
	@Autowired
	private SellerRepository sellerRepo;

	@Autowired
	private ProductRepository productRepo;

	@Override
	public Seller authenticateSeller(String email, String password) {
		
		return sellerRepo.findByEmailAndPassword(email, password).orElseThrow(()->new SellerHandlingException("Invalid login credentials"));
	}

	@Override
	public List<Product> getAllProductsBySellerId(Integer sellerId) {
		return productRepo.findBySellerId(sellerId);
	}
	

}
