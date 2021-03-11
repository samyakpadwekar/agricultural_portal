package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SellerResponse;
import com.app.pojos.Seller;
import com.app.service.IUserService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private IUserService userService;
	
	@GetMapping("/search-seller-by-businessname/{businessName}")
	public ResponseEntity<?> showSellerByBusinessName(@PathVariable String businessName)
	{
		System.out.println("in ctor of show list of seller by product productName : "+businessName);
		Seller s=userService.findSellerByBuisenessName(businessName);
		if(s==null)
		{
			return new ResponseEntity<>(s, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(new SellerResponse(s),HttpStatus.OK);
	}
}
