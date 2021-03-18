package com.app.service;

import java.util.List;

import com.app.dto.CategoryDTO;
import com.app.dto.ProductCatalogueDTO;
import com.app.dto.ProductFeedDTO;
import com.app.dto.SellerCompDTO;
import com.app.dto.SignupRequest;
import com.app.dto.UserResponse;
import com.app.dto.WishlistDTO;
import com.app.enums.SellerStatus;
import com.app.pojos.Category;
import com.app.pojos.Complaint;
import com.app.pojos.Feedback;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.User;
import com.app.pojos.Wishlist;

public interface IUserService {
	User authenticateUser(String email, String password);

	User saveUser(SignupRequest signupRequest);

	Seller findSellerByBuisenessName(String name);

	List<Product> findProductsByCategory(String categoryName);

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
}
