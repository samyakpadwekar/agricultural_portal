package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.ProductDTO;
import com.app.dto.ProductList;
import com.app.dto.SellerDTO;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.service.ISellerService;

@RestController
@RequestMapping("/seller")
public class SellerController {

	@Autowired
	private ISellerService sellerService;

	public SellerController() {
		// TODO Auto-generated constructor stub
		System.out.println("in ctor of seller controller");
	}

	@PostMapping("/login")
	public ResponseEntity<?> sellerLogin(@RequestBody LoginRequest login) {
		System.out.println("in seller login");

		return new ResponseEntity<>(sellerService.authenticateSeller(login.getEmail(), login.getPassword()),
				HttpStatus.OK);
	}

	@GetMapping("/list-by-product")
	public List<Seller> showListOfSellerByProduct() {
		System.out.println("in ctor of show list of seller by product ");
		return null;
	}

	@GetMapping("/list-sellers-products/{sellerId}")
	public ResponseEntity<?> getAllProducts(@PathVariable Integer sellerId) {
		System.out.println("in get all products of seller");
		List<Product> productList = sellerService.getAllProductsBySellerId(sellerId);
		if (productList.size() == 0)
			return new ResponseEntity<ProductList>(new ProductList(productList), HttpStatus.NO_CONTENT);
		return new ResponseEntity<ProductList>(new ProductList(productList), HttpStatus.OK);
	}

	@PostMapping("/add-product/{sellerId}/{catId}")
	public ResponseEntity<?> addProduct(@RequestBody ProductDTO productDTO, @PathVariable Integer sellerId,
			@PathVariable Integer catId) {
		System.out.println("in add category");
		return new ResponseEntity<>(sellerService.addProduct(productDTO, sellerId, catId), HttpStatus.CREATED);
	}

	@DeleteMapping("/delete-product/{productId}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer productId) {
		System.out.println("in delete product");
		return ResponseEntity.ok(sellerService.deleteProduct(productId));
	}

	@PostMapping("/update-profile")
	public ResponseEntity<?> editProfile(@RequestBody SellerDTO s) {
		System.out.println("In edit profile of Seller" + s);
		return ResponseEntity.ok(sellerService.editProfile(s));
	}
}
