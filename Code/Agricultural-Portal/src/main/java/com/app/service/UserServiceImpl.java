package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.UserHandlingException;
import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.dao.SellerRepository;
import com.app.dao.UserRepository;
import com.app.dto.CategoryDTO;
import com.app.dto.UserResponse;
import com.app.pojos.Category;
import com.app.pojos.Product;
import com.app.pojos.Role;
import com.app.pojos.Seller;
import com.app.pojos.SellerStatus;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private SellerRepository sellerRepo;

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private CategoryRepository catRepo;

	@Override
	public User authenticateUser(String email, String password) {

		return userRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new UserHandlingException("Invalid Credentials..!"));
	}

	@Override
	public Seller findSellerByBuisenessName(String businessName) {
		return sellerRepo.findByBusinessName(businessName)
				.orElseThrow(() -> new UserHandlingException("Invalid Buiseness Name..!"));
	}
	
	@Override
	public List<Category> getAllCategories() {
		
		return catRepo.findAll();
	}


	@Override
	public List<Product> findProductsByCategory(String categoryName) {

		return productRepo.findByCategoryName(categoryName);
	}

	@Override
	public List<User> getAllCustomer() {
		return userRepo.findByRole(Role.CUSTOMER);
	}

	@Override
	public Category addCategory(CategoryDTO catDTO) {

		Category cat = new Category();
		BeanUtils.copyProperties(catDTO, cat);
		return catRepo.save(cat);
	}

	@Override
	public Category editCategory(int categoryId, CategoryDTO catDTO) {
		Category catDetails = catRepo.findById(categoryId).get();
		System.out.println("in edir cat service before: " + catDetails);
		BeanUtils.copyProperties(catDTO, catDetails);
		System.out.println("in edir cat service after: " + catDetails);
		return catDetails;
	}

	@Override
	public String deleteCategory(int categoryId) {
		System.out.println("in delete category"+ categoryId);
		catRepo.deleteById(categoryId);
		return "ID: "+categoryId+" Category deleted";
	}
	
	@Override
	public String changeSellerAccountStatus(int id, SellerStatus status) {
		
		int i= sellerRepo.updateStatus(status, id);
		if(i==0) return "Invalid seller id";
		return "status changed to "+status+" successfully";
	}
	
	@Override
	public List<Seller> getAllSeller() {
		return sellerRepo.findAll();
	}
	
	@Override
	public String userSignup(UserResponse userDto) {
		User user=new User();
		BeanUtils.copyProperties(userDto, user);
		userRepo.save(user);		
		return "Your account has been successfully created !";
	}
	
	@Override
	public String editProfile(UserResponse userDto) {
		User persistUser= userRepo.findById(userDto.getUserId()).get();
		BeanUtils.copyProperties(userDto, persistUser, "userId");
		return "Your account has been successfully updated !";
	}

}
