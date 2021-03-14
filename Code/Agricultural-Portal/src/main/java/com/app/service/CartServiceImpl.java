package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.custom_excs.CartItemNotExistException;
import com.app.dao.CartRepository;
import com.app.dao.UserRepository;
import com.app.dto.AddToCartDto;
import com.app.dto.CartDTO;
import com.app.dto.CartItemDto;
import com.app.pojos.Cart;
import com.app.pojos.Product;
import com.app.pojos.Wishlist;

@Service
@Transactional
public class CartServiceImpl implements ICartService {
	
	@Autowired
    private CartRepository cartRepository;
	
	//@Autowired
	//private UserRepository userRepo;

    public CartServiceImpl() {}
	

	public CartDTO listCartItems(int buyerId) {
		List<Cart> cartList = cartRepository.findAllByUserIdOrderByCreatedDateDesc(buyerId);
		List<CartItemDto> cartItems = new ArrayList<>();
		for (Cart cart : cartList) {
			CartItemDto cartItemDto = getDtoFromCart(cart);
			cartItems.add(cartItemDto);
		}
		double totalCost = 0;
		for (CartItemDto cartItemDto : cartItems) {
			totalCost += (cartItemDto.getProduct().getPrice() * cartItemDto.getQuantity());
		}
		CartDTO cartDto = new CartDTO(cartItems, totalCost);
		return cartDto;
	}

	 public static CartItemDto getDtoFromCart(Cart cart) {
		CartItemDto cartItemDto = new CartItemDto(cart);
		return cartItemDto;
	}
	
	 //<a href="aaa" value=product name="abc">btn
	 public Cart addToCart(AddToCartDto addToCartDto,int userId){
	        //Cart cart = getAddToCartFromDto(addToCartDto,userId);
		 //User user=userRepo.findById(addToCartDto.getUserId()).get();
		 System.out.println("AddToCartDTO : "+addToCartDto);
	        Cart cart = new Cart(userId,addToCartDto.getProductId(),addToCartDto.getQuantity());
	        return cartRepository.save(cart);
	    }


	@Override
	public String updateCartItem(@Valid AddToCartDto cartDto) {
		// TODO Auto-generated method stub
		Cart persistCart = cartRepository.findById(cartDto.getId()).get();
		persistCart.setQuantity(cartDto.getQuantity());
		return "Cart has been updated";
	}


	@Override
	public String deleteCartItem(int cartId) throws CartItemNotExistException {
        if (!cartRepository.existsById(cartId))
            throw new CartItemNotExistException("Cart id is invalid : " + cartId);
        cartRepository.deleteById(cartId);
        return "Cart Successfully deleted";
    }
	
	
}