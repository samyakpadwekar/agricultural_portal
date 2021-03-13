package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CategoryList;
import com.app.dto.ProductList;
import com.app.dto.WishlistDTO;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Wishlist;
import com.app.service.IUserService;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private IUserService userService;
	@GetMapping("/category")
	public ResponseEntity<?> showCategoies()
	{
		System.out.println("in show categoies");
		List<Category> categoryList=userService.getAllCategories();
		if(categoryList.size()==0) {
			return new ResponseEntity<>(new CategoryList(categoryList), HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(new CategoryList(categoryList), HttpStatus.OK);
	}

	
	@GetMapping("/category/{categoryName}")
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
	
	 @GetMapping("/wishlist/{userId}")
	    public ResponseEntity<List<WishlistDTO>> getWishList(@PathVariable int userId) {

	            
	            //get wishlist
	            List<Wishlist> body = userService.readWishList(userId);
	            
	            //create productDTO from productId in wishlist
	            List<WishlistDTO> products = new ArrayList<>();
	            for (Wishlist wishList : body) {
	                    products.add(userService.getWishlistDTO(wishList.getProduct()));
	            }

	            return new ResponseEntity<List<WishlistDTO>>(products, HttpStatus.OK);
	    }
	    
	  
	    @PostMapping("/wishlist/add/{userId}")
	    public ResponseEntity<Wishlist> addWishList(@RequestBody Product product, @PathVariable int userId) {
	            
	            //get userId from token
	            //int userId = authenticationService.getUser(token).getId();
	            
	            //add to wishlist
	            Wishlist wishList = new Wishlist(userId, product);
	           
	            //return the response
	            return new ResponseEntity<Wishlist>( userService.createWishlist(wishList), HttpStatus.CREATED);
	            //return the response

	    }

}
