package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.ProductHandlingException;
import com.app.custom_excs.SellerHandlingException;
import com.app.dao.CategoryRepository;
import com.app.dao.ProductRepository;
import com.app.dao.SellerRepository;
import com.app.dto.ProductDTO;
import com.app.dto.SellerDTO;
import com.app.pojos.Product;
import com.app.pojos.Seller;
import com.app.pojos.SellerStatus;

@Service
@Transactional
public class SellerServiceImpl implements ISellerService {

	@Autowired
	private SellerRepository sellerRepo;

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private CategoryRepository categoryRepo;

	@Override
	public Seller authenticateSeller(String email, String password) {
		Seller s = sellerRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new SellerHandlingException("Invalid login credentials"));
		if(s.getStatus().equals(SellerStatus.PENDING))
			throw new SellerHandlingException("Wait for the admin approval.");
		if(s.getStatus().equals(SellerStatus.SUSPENDED))
			throw new SellerHandlingException("Admin has suspended your account.");
		return s;
	}

	@Override
	public List<Product> getAllProductsBySellerId(Integer sellerId) {
		return productRepo.findBySellerId(sellerId);
	}

	@Override
	public Product addProduct(ProductDTO productDTO, Integer sellerId, Integer catId) {
		Product product2 = null;
		try {
			Product product = new Product();
			BeanUtils.copyProperties(productDTO, product);
			Seller s = sellerRepo.findById(sellerId).get();
			product.setSeller(s);
			product.setCategory(categoryRepo.findById(catId).get());
			
			//BL
			product.setUnitsSold(0);
			product.setAvgRating(0.0);
			product2 = productRepo.save(product);
		} catch (Exception e) {
			//yet to handle other exceptions
			throw new ProductHandlingException("Duplicate product entry");
		}
		
		return product2;
	}
	
	@Override
	public String editProduct(ProductDTO productDTO) {
		Product product = productRepo.findById(productDTO.getProductId()).get(); //product : persistent
		System.out.println("in edit product service , before : "+product);
		Seller seller = product.getSeller();
		BeanUtils.copyProperties(productDTO, product);
		product.setSeller(seller);
		//dirty checking
		System.out.println("in edit product service , after : "+product);
		return "product : "+product.getProductCatalogue().getProductName()+" updated successfully";
	}

	@Override
	public String deleteProduct(Integer productId) {
		// productRepo.deleteById(productId);
		Product product = productRepo.findById(productId).get();
		int sellerId = product.getSeller().getSellerId();
		// as it is bidirectional
		boolean removed = sellerRepo.findById(sellerId).get().getProducts().remove(product);
		System.out.println("removed from seller instance : " + removed);
		productRepo.delete(product);
		return "Id : " + productId + " product deleted";
	}

	@Override
	public String editProfile(SellerDTO s) {
		Seller persistSeller = sellerRepo.findById(s.getSellerId()).get();
		BeanUtils.copyProperties(s, persistSeller, "sellerId");
		return "You account profile has been successfully updated..!";
	}

	@Override
	public String sellerSignup(SellerDTO s) {
		Seller newSeller = new Seller();
		BeanUtils.copyProperties(s, newSeller);
		sellerRepo.save(newSeller);

		return "Signup Successfully..!";
	}

}
