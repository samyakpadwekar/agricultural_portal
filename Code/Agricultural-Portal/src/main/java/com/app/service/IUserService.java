package com.app.service;

import java.util.List;

import com.app.dto.CategoryDTO;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.SellerStatus;
import com.app.pojos.User;

public interface IUserService {
	User authenticateUser(String email, String password);
	
	Seller findSellerByBuisenessName(String name);
	
	List<Product> findProductsByCategory(String categoryName);
	List<User> getAllCustomer();
	Category addCategory(CategoryDTO catDTO);
	
	Category editCategory(int categoryId, CategoryDTO catDTO);
	
	String deleteCategory(int categoryId);
	
	String changeSellerAccountStatus(int id,SellerStatus status);
	
	List<Category> getAllCategories();
	
	List<Seller> getAllSeller();
}
