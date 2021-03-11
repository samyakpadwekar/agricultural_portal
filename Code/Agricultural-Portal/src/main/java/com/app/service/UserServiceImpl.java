package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.UserHandlingException;
import com.app.dao.ProductRepository;
import com.app.dao.SellerRepository;
import com.app.dao.UserRepository;
import com.app.pojos.Product;
import com.app.pojos.Role;
import com.app.pojos.Seller;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	Role role = Role.CUSTOMER;
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private SellerRepository sellerRepo;

	@Autowired
	private ProductRepository productRepo;

	@Override
	public User authenticateUser(String email, String password) {

		return userRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new UserHandlingException("Invalid Credentials..!"));
	}

	@Override
	public Seller findSellerByBuisenessName(String businessName) {
		return sellerRepo.findByBusinessName(businessName)
				.orElseThrow(() -> new UserHandlingException("Invalid Buiseness Name..!"));
	}

	@Override
	public List<Product> findProductsByCategory(String categoryName) {

		return productRepo.findByCategoryName(categoryName);
	}

	@Override
	public List<User> getAllCustomer() {
		return userRepo.findByRole(role);
	}

}
