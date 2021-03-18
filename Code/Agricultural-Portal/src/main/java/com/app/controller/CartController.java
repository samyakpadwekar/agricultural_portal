package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddToCartDto;
import com.app.dto.CartListDTO;
import com.app.pojos.Cart;
import com.app.service.ICartService;

@RestController
@RequestMapping("/user/cart")
public class CartController {

	@Autowired
	private ICartService cartService;

//	 @Autowired
//	 private IProductService productService;

	@GetMapping("/{buyerId}")
	public ResponseEntity<CartListDTO> getCartItems(@PathVariable int buyerId) {
		// authenticationService.authenticate(token);
		// int userId = authenticationService.getUser(token).getId();
		
	
		return new ResponseEntity<CartListDTO>(cartService.listCartItems(buyerId), HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Cart> addToCart(@RequestBody AddToCartDto addToCartDto) {
		// authenticationService.authenticate(token);

		// int userId = authenticationService.getUser(token).getId();
		return new ResponseEntity<Cart>(cartService.addToCart(addToCartDto), HttpStatus.CREATED);

	}

	@PutMapping("/update")
	public ResponseEntity<?> updateCartItem(@RequestBody @Valid AddToCartDto cartDto) {
		//authenticationService.authenticate(token);
		//int userId = authenticationService.getUser(token).getId();

		
		return new ResponseEntity<>(cartService.updateCartItem(cartDto), HttpStatus.OK);
	}

	@DeleteMapping("/delete/{cartItemId}")
	public ResponseEntity<?> deleteCartItem(@PathVariable("cartItemId") int cartId) {
		//authenticationService.authenticate(token);

		//int userId = authenticationService.getUser(token).getId();

		
		return new ResponseEntity<>(cartService.deleteCartItem(cartId), HttpStatus.OK);
	}

}
