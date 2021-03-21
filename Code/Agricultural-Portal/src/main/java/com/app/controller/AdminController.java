package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CategoryDTO;
import com.app.dto.ComplaintList;
import com.app.dto.CustomerList;
import com.app.dto.FeedbackList;
import com.app.dto.ProductCatalogueDTO;
import com.app.dto.ProductDTO;
import com.app.dto.ProductList;
import com.app.dto.ProductReportDto;
import com.app.dto.ProductReportList;
import com.app.dto.SalesReportDTO;
import com.app.dto.SalesReportList;
import com.app.dto.SellerList;
import com.app.dto.SellerResponse;
import com.app.enums.SellerStatus;
import com.app.pojos.Complaint;
import com.app.pojos.Feedback;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.User;
import com.app.service.IOrderService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	@Autowired
	private IUserService userService;
	
	@Autowired
	private IOrderService orderService;

	@GetMapping("/list-all-customer")
	public ResponseEntity<?> getAllCustomer() {
		System.out.println("In a get all customer");
		List<User> custList = userService.getAllCustomer();
		if (custList.size() == 0)
			return new ResponseEntity<CustomerList>(new CustomerList(custList), HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(new CustomerList(custList), HttpStatus.OK);
	}

	@GetMapping("/list-all-seller")
	public ResponseEntity<?> getAllSeller() {
		System.out.println("In a get all Seller");
		List<Seller> sellerList = userService.getAllSeller();
		if (sellerList.size() == 0)
			return new ResponseEntity<SellerList>(new SellerList(sellerList), HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(new SellerList(sellerList), HttpStatus.OK);
	}

	@GetMapping("/search-seller-by-businessname/{businessName}")
	public ResponseEntity<?> showSellerByBusinessName(@PathVariable String businessName) {
		System.out.println("in show list of seller by product productName : " + businessName);
		Seller s = userService.findSellerByBuisenessName(businessName);
		if (s == null) {
			return new ResponseEntity<>(s, HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<>(new SellerResponse(s), HttpStatus.OK);
	}

	@GetMapping("/search-product-by-category/{categoryName}")
	public ResponseEntity<?> getProductsByCategory(@PathVariable String categoryName) {
		System.out.println("in search product by category ");
		List<ProductDTO> productList = userService.findProductsByCategory(categoryName);
		if (!productList.isEmpty()) {
			return new ResponseEntity<>(new ProductList(productList), HttpStatus.OK);
		}
		return new ResponseEntity<>(new ProductList(productList), HttpStatus.NO_CONTENT);
	}

	@GetMapping("/get-categories")
	public ResponseEntity<?> getCategories() {
		System.out.println("in get category");

		return new ResponseEntity<>(userService.getAllCategories(), HttpStatus.OK);
	}
	
	@PostMapping("/add-category")
	public ResponseEntity<?> addCategory(@RequestBody CategoryDTO catDTO) {
		System.out.println("in add category");

		return new ResponseEntity<>(userService.addCategory(catDTO), HttpStatus.CREATED);
	}

	@PutMapping("/edit-category")
	public ResponseEntity<?> editCategory(@RequestBody CategoryDTO catDTO) {
		System.out.println("in edit category " + catDTO);
		return new ResponseEntity<>(userService.editCategory(catDTO), HttpStatus.OK);
	}

	@DeleteMapping("/delete-category/{categoryId}")
	public ResponseEntity<?> deleteCategory(@PathVariable int categoryId) {
		System.out.println("in delete category " + categoryId);
		return ResponseEntity.ok(userService.deleteCategory(categoryId));
	}

	@PutMapping("/activate-seller/{id}")
	public ResponseEntity<?> activateSellerAccount(@PathVariable int id) {
		System.out.println("in activate seller");

		return new ResponseEntity<>(userService.changeSellerAccountStatus(id, SellerStatus.ACTIVE), HttpStatus.OK);
	}

	@PutMapping("/suspend-seller/{id}")
	public ResponseEntity<?> suspendSellerAccount(@PathVariable int id) {
		System.out.println("in suspend seller");

		return new ResponseEntity<>(userService.changeSellerAccountStatus(id, SellerStatus.SUSPENDED), HttpStatus.OK);
	}
	
	@GetMapping("/list-all-complaints")
	public ResponseEntity<?> getAllComplaints(){
		System.out.println("in admin get all Complaints");
		List<Complaint> complaintList = userService.getAllComplaints();
		if (!complaintList.isEmpty()) {
			return new ResponseEntity<>(new ComplaintList(complaintList), HttpStatus.OK);
		}
		return new ResponseEntity<>(new ComplaintList(complaintList), HttpStatus.NO_CONTENT);
	}
	
	@PostMapping("/add-product-catalogue")
	public ResponseEntity<?> addProductCatalogue(@RequestBody ProductCatalogueDTO productCatal)
	{
		System.out.println("in add product catalogue");
		return new ResponseEntity<>(userService.addProductCatalogue(productCatal), HttpStatus.OK);
	}
	
	@GetMapping("/get-product-catalogue")
	public ResponseEntity<?> getProductCatalogue()
	{
		System.out.println("in get product catalogue");
		return new ResponseEntity<>(userService.getProductCatalogue(), HttpStatus.OK);
	}
	
	@GetMapping("/customer-feedbacks")
	public ResponseEntity<?> getAllFeedbacks(){
		System.out.println("in admin get all feedbacks");
		List<Feedback> feedbackList = userService.getAllFeedbacks();
		if (!feedbackList.isEmpty()) {
			return new ResponseEntity<>(new FeedbackList(feedbackList), HttpStatus.OK);
		}
		return new ResponseEntity<>(new FeedbackList(feedbackList), HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/customer-feedbacks/{productId}")
	public ResponseEntity<?> getAllFeedbacks(@PathVariable Integer productId){
		System.out.println("in admin get sellers feedbacks");
		List<Feedback> feedbackList = userService.getFeedbacksByProductId(productId);
		if (!feedbackList.isEmpty()) {
			return new ResponseEntity<>(new FeedbackList(feedbackList), HttpStatus.OK);
		}
		return new ResponseEntity<>(new FeedbackList(feedbackList), HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("/product-report")
	public ResponseEntity<?> projectReport()
	{
		List<ProductReportDto> list=userService.productReport();
		if(list.isEmpty())
			return new ResponseEntity<>(new ProductReportList(list), HttpStatus.NO_CONTENT);
		return  new ResponseEntity<>(new ProductReportList(list), HttpStatus.OK);
	}
	
	@GetMapping("/sales-report")
	public ResponseEntity<?> generateSalesReport(){
		List<SalesReportDTO> salesList = orderService.generateSalesReport();
		
		if (!salesList.isEmpty()) {
			return new ResponseEntity<>(new SalesReportList(salesList), HttpStatus.OK);
		}
		return new ResponseEntity<>(new SalesReportList(salesList), HttpStatus.NO_CONTENT);
	}
}
