package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.CartListDTO;
import com.app.service.IOrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin
public class OrderController {

	@Autowired
	private IOrderService orderService;
	
	public OrderController() {
		System.out.println("in order cntrlr");
	}
	
	@PostMapping("/place-order/{userId}")
	public ResponseEntity<?> cartCheckout(@PathVariable Integer userId){
		System.out.println("Userid in place-order : "+ userId);
		return new ResponseEntity<>(orderService.cartCheckout(userId), HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/confirm-order/{orderId}")
	public ResponseEntity<?> confirmOrder(@PathVariable Integer orderId){
		return new ResponseEntity<>(orderService.confirmOrder(orderId), HttpStatus.OK);
	}
	
	@PutMapping("/cancel-order/{orderId}")
	public ResponseEntity<?> cancelOrder(@PathVariable Integer orderId){
		return new ResponseEntity<>(orderService.cancelOrder(orderId), HttpStatus.OK);
	}
	
	@PutMapping("/dispatch-order/{orderId}")
	public ResponseEntity<?> dispatchOrder(@PathVariable Integer orderId){
		return new ResponseEntity<>(orderService.dispatchOrder(orderId), HttpStatus.OK);
	}
	
	@PutMapping("/deliver-order/{orderId}")
	public ResponseEntity<?> deliverOrder(@PathVariable Integer orderId){
		return new ResponseEntity<>(orderService.deliverOrder(orderId), HttpStatus.OK);
	}
	
	@GetMapping("/orders-list/{sellerId}")
	public ResponseEntity<?> getAllOrdersListOfSeller(@PathVariable Integer sellerId){
		return new ResponseEntity<>(orderService.getAllOrdersOfSeller(sellerId), HttpStatus.OK);
	}
}
