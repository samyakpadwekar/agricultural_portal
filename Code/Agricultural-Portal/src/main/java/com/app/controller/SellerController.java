package com.app.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ComplaintList;
import com.app.dto.LoginRequest;
import com.app.dto.ProductDTO;
import com.app.dto.ProductList;
import com.app.dto.RestockProductDTO;
import com.app.dto.SellerDTO;
import com.app.dto.SellerSignupRequest;
import com.app.pojos.Complaint;
import com.app.pojos.Seller;
import com.app.service.ISellerService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/seller")
@CrossOrigin
public class SellerController {

	@Autowired
	private ISellerService sellerService;

	public SellerController() {
		System.out.println("in ctor of seller controller");
	}

	@PostMapping("/register")
	public ResponseEntity<?> saveSeller(@RequestBody SellerSignupRequest seller) {
		System.out.println("in seller signup " + seller);

		return ResponseEntity.ok(sellerService.saveSeller(seller));
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> sellerLogin(@RequestBody LoginRequest login) {
		System.out.println("in seller login");

		return new ResponseEntity<>(sellerService.authenticateSeller(login.getUsername(), login.getPassword()),
				HttpStatus.OK);
	}

	@GetMapping("/list-by-product")
	public List<Seller> showListOfSellerByProduct() {
		System.out.println("in ctor of show list of seller by product ");
		return null;
	}

	@GetMapping("/list-sellers-products/{sellerId}")
	public ResponseEntity<?> getAllProducts(@PathVariable Integer sellerId) {
		System.out.println("in get all products of seller");
		List<ProductDTO> productList = sellerService.getAllProductsBySellerId(sellerId);
		if (productList.size() == 0)
			return new ResponseEntity<ProductList>(new ProductList(productList), HttpStatus.NO_CONTENT);
		return new ResponseEntity<ProductList>(new ProductList(productList), HttpStatus.OK);
	}

	@GetMapping("/inventory-report/{sellerId}")
	public ResponseEntity<?> inventoryReport(@PathVariable Integer sellerId) {
		System.out.println("in inventory report of seller");
		List<ProductDTO> productList = sellerService.getAllProductsBySellerId(sellerId);
		if (productList.size() == 0)
			return new ResponseEntity<ProductList>(new ProductList(productList), HttpStatus.NO_CONTENT);
		return new ResponseEntity<ProductList>(new ProductList(productList), HttpStatus.OK);
	}

	@PostMapping("/add-product/{sellerId}/{catId}")
	public ResponseEntity<?> addProduct(@RequestParam String productDTO, @PathVariable Integer sellerId,
			@PathVariable Integer catId,@RequestParam MultipartFile imageFile) throws JsonMappingException, JsonProcessingException {
		ProductDTO productDto=new ObjectMapper().readValue(productDTO, ProductDTO.class);		
		System.out.println("productDto"+productDTO);
		System.out.println("imageFile"+imageFile);
		System.out.println("in add category");
		return new ResponseEntity<>(sellerService.addProduct(productDto, sellerId, catId,imageFile), HttpStatus.CREATED);
	}

	@PutMapping("/edit-product")
	public ResponseEntity<?> Product(@RequestParam String productdto,@RequestParam MultipartFile imageFile ) throws IllegalStateException, IOException {
		System.out.println("in edit product");
		ProductDTO productDTO=new ObjectMapper().readValue(productdto, ProductDTO.class);
		return new ResponseEntity<>(sellerService.editProduct(productDTO,imageFile), HttpStatus.OK);
	}

	// manage inventory
	@PutMapping("/restock")
	public ResponseEntity<?> restockProduct(@RequestBody RestockProductDTO restockProductDTO) {
		System.out.println("in restock product");
		return new ResponseEntity<>(sellerService.restockProduct(restockProductDTO), HttpStatus.OK);
	}

	@DeleteMapping("/delete-product/{productId}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer productId) {
		System.out.println("in delete product");
		return ResponseEntity.ok(sellerService.deleteProduct(productId));
	}

	@PutMapping("/update-profile")
	public ResponseEntity<?> editProfile(@RequestBody SellerDTO s) {
		System.out.println("In edit profile of Seller" + s);
		return ResponseEntity.ok(sellerService.editProfile(s));
	}

	@GetMapping("/list-all-complaints/{sellerId}")
	public ResponseEntity<?> listAllComplaints(@PathVariable Integer sellerId) {
		System.out.println("in list all complaints report of seller");
		List<Complaint> complaintList = sellerService.getAllComplaintsBySellerId(sellerId);
		if (complaintList.size() == 0)
			return new ResponseEntity<>(new ComplaintList(complaintList), HttpStatus.NO_CONTENT);
		return new ResponseEntity<>(new ComplaintList(complaintList), HttpStatus.OK);
	}
	
	@GetMapping("/download/{id}")
	public ResponseEntity<?> getImage(@PathVariable int id) throws IOException
	{
		
		Path path=Paths.get(sellerService.getImage(id));
		System.out.println("path :"+sellerService.getImage(id));
		/*if(path)
			return new ResponseEntity<>("Image not Available", HttpStatus.NO_CONTENT);*/
	
	InputStreamResource inputStreamResource =
			new InputStreamResource(new FileInputStream(path.toFile()));

	HttpHeaders headers = new HttpHeaders();
	headers.add("content-type", Files.probeContentType(path));
	return ResponseEntity.ok().headers(headers).body(inputStreamResource);
	}
}
