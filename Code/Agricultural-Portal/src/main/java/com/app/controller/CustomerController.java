package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ProductList;
import com.app.pojos.Product;
import com.app.service.IUserService;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private IUserService userService;

	@GetMapping("/shop-by-category/{categoryName}")
	public ResponseEntity<?> showProducts(@PathVariable String categoryName)
	{
		System.out.println("in shop by category categoryName : "+categoryName);
		List<Product> productList= userService.findProductsByCategory(categoryName);
		if(productList.isEmpty())
		{
			return new ResponseEntity<>(new ProductList(productList), HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(new ProductList(productList), HttpStatus.OK);
	}
}
