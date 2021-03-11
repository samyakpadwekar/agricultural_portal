package com.app.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Seller;

@RestController
@RequestMapping("/seller")
public class SellerController {
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
}
