package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.ProductCatalogueHandlingException;
import com.app.custom_excs.UserHandlingException;
import com.app.dao.CategoryRepository;
import com.app.dao.ComplaintRepository;
import com.app.dao.FeedbackRepository;
import com.app.dao.OrderDetailsRepository;
import com.app.dao.OrderRepository;
import com.app.dao.ProductCatalogueRepository;
import com.app.dao.ProductRepository;
import com.app.dao.SellerRepository;
import com.app.dao.UserRepository;
import com.app.dao.WishListRepository;
import com.app.dto.CategoryDTO;
import com.app.dto.ProductCatalogueDTO;
import com.app.dto.ProductFeedDTO;
import com.app.dto.ProductReportDto;
import com.app.dto.SellerCompDTO;
import com.app.dto.SignupRequest;
import com.app.dto.UserResponse;
import com.app.dto.WishlistDTO;
import com.app.enums.ComplaintStatus;
import com.app.enums.Role;
import com.app.enums.SellerStatus;
import com.app.pojos.Category;
import com.app.pojos.Complaint;
import com.app.pojos.Feedback;
import com.app.pojos.OrderDetails;
import com.app.pojos.Product;
import com.app.pojos.ProductCatalogue;
import com.app.pojos.Seller;
import com.app.pojos.User;
import com.app.pojos.Wishlist;

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

	@Autowired
	private WishListRepository wishListRepository;

	@Autowired
	private FeedbackRepository feedRepo;

	@Autowired
	private ComplaintRepository compRepo;

	@Autowired
	private ProductCatalogueRepository productCatalRepo;
	
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private OrderDetailsRepository orderDetRepo;


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
	public Category editCategory(CategoryDTO catDTO) {
		Category catDetails = catRepo.findById(catDTO.getCategoryId()).get();
		System.out.println("in edir cat service before: " + catDetails);
		BeanUtils.copyProperties(catDTO, catDetails);
		System.out.println("in edir cat service after: " + catDetails);
		return catDetails;
	}

	@Override
	public String deleteCategory(int categoryId) {
		System.out.println("in delete category" + categoryId);
		catRepo.deleteById(categoryId);
		return "ID: " + categoryId + " Category deleted";
	}

	@Override
	public String changeSellerAccountStatus(int id, SellerStatus status) {

		int i = sellerRepo.updateStatus(status, id);
		if (i == 0)
			return "Invalid seller id";
		return "status changed to " + status + " successfully";
	}

	@Override
	public List<Seller> getAllSeller() {
		return sellerRepo.findAll();
	}

	@Override
	public String userSignup(UserResponse userDto) {
		User user = new User();
		BeanUtils.copyProperties(userDto, user);
		userRepo.save(user);
		return "Your account has been successfully created !";
	}

	@Override
	public String editProfile(UserResponse userDto) {
		User persistUser = userRepo.findById(userDto.getUserId()).get();
		BeanUtils.copyProperties(userDto, persistUser, "userId");
		return "Your account has been successfully updated !";
	}

	@Override
	public List<Wishlist> readWishList(int userId) {
		return wishListRepository.findAllByUserIdOrderByCreatedDateDesc(userId);
	}

	@Override
	public WishlistDTO getWishlistDTO(Product product) {
		WishlistDTO wishlistDTO = new WishlistDTO(product);
		return wishlistDTO;
	}

	@Override
	public Wishlist createWishlist(Wishlist wishList) {
		System.out.println("wishlist " + wishList);
		return wishListRepository.save(wishList);
	}

	@Override
	public List<Seller> getSellerByArea(String pincode) {
		System.out.println("pincode :" + pincode);
		return sellerRepo.findByPinCode(pincode);
	}

	@Override
	public User saveUser(SignupRequest signupRequest) {
		com.app.pojos.User newUser = new User();
		BeanUtils.copyProperties(signupRequest, newUser, "role");
		System.out.println("newUser:" + newUser);
		newUser.setRole(Role.valueOf(signupRequest.getRole().toUpperCase()));
		newUser.setRegDate(LocalDate.now());
		return userRepo.save(newUser); // DirtyChecking and insert query
	}

	@Override
	public String addFeedback(ProductFeedDTO productFeedbackDto) {
		System.out.println("ProductFeedDTO : " + productFeedbackDto);
		System.out.println("ProductId : " + productFeedbackDto.getProductId());
		Feedback feedback = new Feedback(productFeedbackDto.getUserId(), productFeedbackDto.getProductId(), productFeedbackDto.getFeedback(),
				productFeedbackDto.getRating());
		Product product=productRepo.findById(productFeedbackDto.getProductId()).get();
		System.out.println("product"+product);
		if(product.getAvgRating()!=null)
			product.setAvgRating((productFeedbackDto.getRating()+product.getAvgRating())/2);
		product.setAvgRating(productFeedbackDto.getRating());
		
		feedRepo.save(feedback);
		return "Product Review has been submitted";
	}

	@Override
	public String addComplaint(SellerCompDTO sellerComplaintDto, int productId) {
		System.out.println("SellerCompDTO : " + sellerComplaintDto);
		System.out.println("ProductId : " + productId);
		// @NotNull Integer userId, @NotNull Integer productId, String complaint, Status
		// status
		Complaint complaint = new Complaint(sellerComplaintDto.getUserId(), productId,
				sellerComplaintDto.getComplaint(), ComplaintStatus.RAISED);
		compRepo.save(complaint);
		return "Seller complaint has been registered";
	}

	@Override
	public User authenticateUser(String username, String password) {
		return userRepo.findByUserNameAndPassword(username, password)
				.orElseThrow(() -> new UserHandlingException("Invalid Credentials..!"));
	}

	@Override
	public List<Complaint> getAllComplaints() {

		return compRepo.findAll();
	}

	@Override
	public String addProductCatalogue(ProductCatalogueDTO productCatal) {
		ProductCatalogue newProductCatal = new ProductCatalogue();
		BeanUtils.copyProperties(productCatal, newProductCatal);
		try {
			productCatalRepo.save(newProductCatal);
		} catch (RuntimeException e) {
			throw new ProductCatalogueHandlingException("Enter Unique Product name..!");
		}
		return "Product added to catalogue successfully";
	}

	@Override
	public List<Feedback> getAllFeedbacks() {
		return feedRepo.findAll();
	}
	
	@Override
	public List<ProductReportDto> productReport() {
		
		  List<ProductReportDto> report=new ArrayList<ProductReportDto>();
		  List<Product> list= productRepo.findAll();
		
		 
		  list.forEach(p->{
			  ProductReportDto productReport=new ProductReportDto();
		  productReport.setProductName(p.getProductCatalogue().getProductName());
		  productReport.setSellerBusinessName(p.getSeller().getBusinessName());
		  productReport.setAvgPrice(p.getAvgRating());
		  productReport.setInStock(p.getUnitsStock());
		  productReport.setSold(p.getUnitsSold());
		  productReport.setAvgPrice(p.getPrice()); 
		  report.add(productReport); 
		  
		  });
		 
		  System.out.println("report :"+report.toString());
		  return report;
	
	}
	
	@Override
	public List<OrderDetails> getOrdersByBuyerId(int buyerId) {
		System.out.println("ByerId :" + buyerId);
		int orderId=orderRepo.findByBuyerUserId(buyerId).getOrderId();
		return orderDetRepo.findByOrderOrderId(orderId);
	}
	
	@Override
	public List<Product> getProductByNameOrCategory(String searchvalue) {
		return productRepo.getProductByNameOrCategory(searchvalue);
	}


}
