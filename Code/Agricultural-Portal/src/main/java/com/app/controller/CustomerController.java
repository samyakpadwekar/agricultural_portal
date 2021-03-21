package com.app.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CategoryList;
import com.app.dto.OrderDTO;
import com.app.dto.ProductDTO;
import com.app.dto.ProductFeedDTO;
import com.app.dto.ProductList;
import com.app.dto.SellerCompDTO;
import com.app.dto.SellerList;
import com.app.dto.WishlistDTO;
import com.app.pojos.Category;
import com.app.pojos.Order;
import com.app.pojos.OrderDetails;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.Wishlist;
import com.app.service.IUserService;


@RestController
@RequestMapping("/customer")
@CrossOrigin
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
		List<ProductDTO> productList= userService.findProductsByCategory(categoryName);
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
	    

	    
	    @GetMapping("/near-by-seller/{pincode}")
	    public ResponseEntity<?> showNearBySeller(@PathVariable String pincode)
		{
			System.out.println("in showNearBySeller : "+pincode);
			List<Seller> sellerList= userService.getSellerByArea(pincode);
			System.out.println("Sellerlist : "+sellerList);
			if(sellerList.isEmpty())
			{
				return new ResponseEntity<>(new SellerList(sellerList), HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(new SellerList(sellerList), HttpStatus.OK);
		}
	    
	    @PostMapping("/feedback")
	    public ResponseEntity<?> addProductReview(@RequestBody ProductFeedDTO productFeedbackDto)
	    {
	    	// authenticationService.authenticate(token);

			// int userId = authenticationService.getUser(token).getId();
			return new ResponseEntity<String>(userService.addFeedback(productFeedbackDto), HttpStatus.ACCEPTED);
	    }
	    
	    @PostMapping("/complaint/{productId}")
	    public ResponseEntity<?> addSellerComp(@RequestBody SellerCompDTO sellerComplaintDto,@PathVariable int productId)
	    {
	    	// authenticationService.authenticate(token);

			// int userId = authenticationService.getUser(token).getId();
			return new ResponseEntity<String>(userService.addComplaint(sellerComplaintDto, productId), HttpStatus.ACCEPTED);
	    }

	    
	    @GetMapping("/your-order/{buyerId}")
	    public ResponseEntity<?> getAllOrders(@PathVariable Integer buyerId)
		{
			System.out.println("in getAllOrders : "+buyerId);
			List<Order> orderlist= userService.getOrdersByBuyerId(buyerId);
			System.out.println("Sellerlist : "+orderlist);
			if(orderlist.isEmpty())
			{
				return new ResponseEntity<>(orderlist, HttpStatus.NO_CONTENT);
			}
			return new ResponseEntity<>(orderlist, HttpStatus.OK);
		}
	    
	    @GetMapping("/order-details/{oid}")
	    public ResponseEntity<?> getOrderDetails(@PathVariable Integer oid)
	    { 
	    	List<OrderDetails> orderList=userService.getOrderDetails(oid);
	    	if(orderList!=null)
	    		return new ResponseEntity<>(new OrderDTO(orderList), HttpStatus.OK);
	    	return new ResponseEntity<>(orderList, HttpStatus.NO_CONTENT);
	    } 
	    
	  //search bar functionality to search products by product name and category name
	    @GetMapping("/search/{searchvalue}")
		public ResponseEntity<?> getProductsByCategory(@PathVariable String searchvalue) {
			System.out.println("in search product by category ");
			List<ProductDTO> productList = userService.getProductByNameOrCategory(searchvalue);
			if (!productList.isEmpty()) {
				return new ResponseEntity<>(new ProductList(productList), HttpStatus.OK);
			}
			return new ResponseEntity<>(new ProductList(productList), HttpStatus.NO_CONTENT);
		}
}
