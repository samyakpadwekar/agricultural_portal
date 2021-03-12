package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.SellerHandlingException;
import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.dao.SellerRepository;
import com.app.dto.ProductDTO;
import com.app.pojos.Product;
import com.app.pojos.Seller;

@Service
@Transactional
public class SellerServiceImpl implements ISellerService {
	
	@Autowired
	private SellerRepository sellerRepo;

	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private CategoryRepository categoryRepo;

	@Override
	public Seller authenticateSeller(String email, String password) {
		
		return sellerRepo.findByEmailAndPassword(email, password).orElseThrow(()->new SellerHandlingException("Invalid login credentials"));
	}

	@Override
	public List<Product> getAllProductsBySellerId(Integer sellerId) {
		return productRepo.findBySellerId(sellerId);
	}
	
	@Override
	public Product addProduct(ProductDTO productDTO, Integer sellerId,Integer catId) {
		Product product = new Product();
		BeanUtils.copyProperties(productDTO, product);
		product.setSeller(sellerRepo.findById(sellerId).get());
		product.setCategory(categoryRepo.findById(catId).get());
		//BL
		product.setUnitsSold(0);
		product.setAvgRating(0.0);
		return productRepo.save(product);
	}

}
