package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.CartDTO;
import com.app.service.IOrderService;

@RestController
@RequestMapping("/order")
public class OrderController {

	@Autowired
	private IOrderService orderService;
	
	public OrderController() {
		System.out.println("in order cntrlr");
	}
	
	@PostMapping("/place-order/{userId}")
	public ResponseEntity<?> cartCheckout(@PathVariable Integer userId){
		return new ResponseEntity<>(orderService.cartCheckout(userId), HttpStatus.ACCEPTED);
	}
}
