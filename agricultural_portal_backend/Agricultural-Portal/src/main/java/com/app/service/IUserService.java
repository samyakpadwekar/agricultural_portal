package com.app.service;

import java.util.List;

import com.app.dto.CategoryDTO;
import com.app.dto.ProductCatalogueDTO;
import com.app.dto.ProductDTO;
import com.app.dto.ProductFeedDTO;
import com.app.dto.ProductReportDto;
import com.app.dto.SellerCompDTO;
import com.app.dto.SignupRequest;
import com.app.dto.UserResponse;
import com.app.dto.WishlistDTO;
import com.app.enums.SellerStatus;
import com.app.pojos.Category;
import com.app.pojos.Complaint;
import com.app.pojos.Feedback;
import com.app.pojos.Order;
import com.app.pojos.OrderDetails;
import com.app.pojos.Product;
import com.app.pojos.ProductCatalogue;
import com.app.pojos.Seller;
import com.app.pojos.User;
import com.app.pojos.Wishlist;

public interface IUserService {
	User authenticateUser(String email, String password);

	User saveUser(SignupRequest signupRequest);

	Seller findSellerByBuisenessName(String name);

	List<ProductDTO> findProductsByCategory(String categoryName);

	List<User> getAllCustomer();

	Category addCategory(CategoryDTO catDTO);

	Category editCategory(CategoryDTO catDTO);

	String deleteCategory(int categoryId);

	String changeSellerAccountStatus(int id, SellerStatus status);

	List<Category> getAllCategories();

	List<Seller> getAllSeller();

	String editProfile(UserResponse user);

	String userSignup(UserResponse user);

	List<Wishlist> readWishList(int user_id);

	WishlistDTO getWishlistDTO(Product product);

	Wishlist createWishlist(Wishlist wishList);

	List<Seller> getSellerByArea(String pincode);

	String addFeedback(ProductFeedDTO productFeedbackDto);

	String addComplaint(SellerCompDTO sellerComplaintDto, int productId);
	
	List<Complaint> getAllComplaints();
	
	String addProductCatalogue(ProductCatalogueDTO productCatal);
	
	List<Feedback> getAllFeedbacks();
	
	List<ProductReportDto> productReport();

	List<Order> getOrdersByBuyerId(int buyerId);


	List<ProductDTO> getProductByNameOrCategory(String searchvalue);



	List<ProductCatalogue> getProductCatalogue();
	List<OrderDetails> getOrderDetails(Integer id);

	List<Feedback> getFeedbacksByProductId(Integer productId);
// <<<<<<< HEAD
// =======
	
// >>>>>>> 48c6d15249699b36c1b0d34030bd597463cfbeda
	List<Product> getAllProducts();


}
