package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ProductDTO;
import com.app.dto.RestockProductDTO;
import com.app.dto.SellerDTO;
import com.app.dto.SellerSignupRequest;
import com.app.pojos.Complaint;
import com.app.pojos.Product;
import com.app.pojos.Seller;

public interface ISellerService {
	Seller authenticateSeller(String email, String password);

	List<ProductDTO> getAllProductsBySellerId(Integer sellerId);

	Product addProduct(ProductDTO productDTO, Integer sellerId, Integer catId,MultipartFile imageFile);

	String editProduct(ProductDTO productDTO,MultipartFile imageFile) throws IllegalStateException, IOException;

	String deleteProduct(Integer productId);

	String editProfile(SellerDTO s);

	Seller saveSeller(SellerSignupRequest seller);

	String restockProduct(RestockProductDTO restockProductDTO);
	
	List<Complaint> getAllComplaintsBySellerId(Integer sellerId);
	
	String getImage(int id) throws IOException;
}
