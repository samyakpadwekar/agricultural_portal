package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CategoryDTO;
import com.app.dto.CustomerList;
import com.app.dto.ProductList;
import com.app.dto.SellerList;
import com.app.dto.SellerResponse;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.User;
import com.app.service.ISellerService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private IUserService userService;
	
	@Autowired
	private ISellerService sellerService;

	@GetMapping("/list-all-customer")
	public ResponseEntity<?> getAllCustomer() {
		System.out.println("In a get all customer");
		List<User> custList = userService.getAllCustomer();
		if (custList.size() == 0)
			return new ResponseEntity<CustomerList>(new CustomerList(custList), HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(new CustomerList(custList), HttpStatus.OK);
	}
	
	@GetMapping("/list-all-seller")
	public ResponseEntity<?> getAllSeller() {
		System.out.println("In a get all Seller");
		List<Seller> sellerList = sellerService.getAllSeller();
		if (sellerList.size() == 0)
			return new ResponseEntity<SellerList>(new SellerList(sellerList), HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(new SellerList(sellerList), HttpStatus.OK);
	}

	@GetMapping("/search-seller-by-businessname/{businessName}")
	public ResponseEntity<?> showSellerByBusinessName(@PathVariable String businessName) {
		System.out.println("in ctor of show list of seller by product productName : " + businessName);
		Seller s = userService.findSellerByBuisenessName(businessName);
		if (s == null) {
			return new ResponseEntity<>(s, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(new SellerResponse(s), HttpStatus.OK);
	}

	@GetMapping("/search-product-by-category/{categoryName}")
	public ResponseEntity<?> getProductsByCategory(@PathVariable String categoryName) {
		System.out.println("in search product by category ");
		List<Product> productList = userService.findProductsByCategory(categoryName);
		if (!productList.isEmpty()) {
			return new ResponseEntity<>(new ProductList(productList), HttpStatus.OK);
		}
		return new ResponseEntity<>(new ProductList(productList), HttpStatus.NO_CONTENT);
	}
	
	
	@PostMapping("/add-category")
	public ResponseEntity<?> addCategory(@RequestBody CategoryDTO catDTO){
		System.out.println("in add category");
		
		return new ResponseEntity<>(userService.addCategory(catDTO), HttpStatus.CREATED);
	}
	
}
