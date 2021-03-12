package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
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
	
	@GetMapping("/list-by-product")
	public List<Seller> showListOfSellerByProduct()
	{
		System.out.println("in ctor of show list of seller by product ");
		return null;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> sellerLogin(@RequestBody LoginRequest login)
	{
		System.out.println("in seller login");
		
		return new ResponseEntity<>( sellerService.authenticateSeller(login.getEmail(), login.getPassword()), HttpStatus.OK);
	}
}
















