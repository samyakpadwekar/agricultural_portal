package com.app.service;

import javax.validation.Valid;

import com.app.dto.AddToCartDto;
import com.app.dto.CartDTO;
import com.app.pojos.Cart;

public interface ICartService {
	CartDTO listCartItems(int user_id);

	Cart addToCart(AddToCartDto addToCartDto, int userId);

	String updateCartItem(@Valid AddToCartDto cartDto);

	String deleteCartItem(int cartId);

}
