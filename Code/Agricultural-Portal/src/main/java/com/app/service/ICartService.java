package com.app.service;

import javax.validation.Valid;

import com.app.dto.AddToCartDto;
import com.app.dto.CartListDTO;
import com.app.pojos.Cart;

public interface ICartService {
	CartListDTO listCartItems(int user_id);

	Cart addToCart(AddToCartDto addToCartDto);

	String updateCartItem(@Valid AddToCartDto cartDto);

	String deleteCartItem(int cartId);

}
