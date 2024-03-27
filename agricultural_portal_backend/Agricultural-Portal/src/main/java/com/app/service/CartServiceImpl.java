package com.app.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.CartItemNotExistException;
import com.app.dao.CartRepository;
import com.app.dao.ProductRepository;
import com.app.dto.AddToCartDto;
import com.app.dto.CartListDTO;
import com.app.pojos.Cart;

@Service
@Transactional
public class CartServiceImpl implements ICartService {

	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private ProductRepository productRepository;
	
	// @Autowired
	// private UserRepository userRepo;

	public CartServiceImpl() {
	}

	public CartListDTO listCartItems(int buyerId) {
		List<Cart> cartList = cartRepository.findAllByUserIdOrderByCreatedDateDesc(buyerId);
		
		double totalCost = 0;
		for (Cart cart : cartList) {
			System.out.println("cart : " + cart);
			System.out.println("product : " + cart.getProduct());

			totalCost += (cart.getProduct().getPrice() * cart.getQuantity() * (100 - cart.getProduct().getDiscount())
					/ 100);
//			cost = price*quantity - disc = price*quantity - price*quantity * disc = price*quantity*(100-disc)/100 
		}
		
		CartListDTO cartDto = new CartListDTO(cartList, totalCost);
		
		
		return cartDto;
	}

	// <a href="aaa" value=product name="abc">btn
	public Cart addToCart(AddToCartDto addToCartDto) {
		
//		System.out.println("AddToCartDTO : " + addToCartDto);
//		Cart cart = new Cart(addToCartDto.getUserId(), addToCartDto.getProductId(), addToCartDto.getQuantity());
		
		Cart cart;
		try {
			cart = cartRepository.findByUserIdAndProductId(addToCartDto.getUserId(), addToCartDto.getProductId()).get();
			cart.setQuantity(cart.getQuantity()+addToCartDto.getQuantity());
		} catch (RuntimeException e) {
			System.out.println("No cart found");
			int pId = addToCartDto.getProductId();
			int sId = productRepository.findById(pId).get().getSeller().getSellerId();
			cart = new Cart(addToCartDto.getUserId(), addToCartDto.getProductId(), addToCartDto.getQuantity(), sId);
		}
		
		return cartRepository.save(cart);
	}

	@Override
	public String updateCartItem(@Valid AddToCartDto cartDto) {
		// TODO Auto-generated method stub
		System.out.println("addToCart DTO: "+cartDto.toString());
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