package com.app.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.custom_excs.ProductHandlingException;
import com.app.custom_excs.SellerHandlingException;
import com.app.dao.CategoryRepository;
import com.app.dao.ComplaintRepository;
import com.app.dao.ProductRepository;
import com.app.dao.SellerRepository;
import com.app.dto.ProductDTO;
import com.app.dto.RestockProductDTO;
import com.app.dto.SellerDTO;
import com.app.dto.SellerSignupRequest;
import com.app.enums.SellerStatus;
import com.app.pojos.Complaint;
import com.app.pojos.Product;
import com.app.pojos.Seller;

@Service
@Transactional
public class SellerServiceImpl implements ISellerService{
	
	@Value("${file.upload.location}")
	private String location;

	@Autowired
	private SellerRepository sellerRepo;

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private CategoryRepository categoryRepo;
	
	@Autowired
	private ComplaintRepository compRepo;

	@Override
	public Seller authenticateSeller(String username, String password) {

		return sellerRepo.findByUserNameAndPassword(username, password)
				.orElseThrow(() -> new SellerHandlingException("Invalid login credentials"));
	}

	@Override
	public List<ProductDTO> getAllProductsBySellerId(Integer sellerId) {
		List<ProductDTO> list=new ArrayList<ProductDTO>();
		List<Product> products=productRepo.findBySellerId(sellerId);
		products.forEach(p->{
			 ProductDTO productDto=new ProductDTO();
        	 BeanUtils.copyProperties(p, productDto,"picture");
        	 if(p.getPicture()!=null)
        	 productDto.setPicture(new String(p.getPicture()));
        	 list.add(productDto);
		});
		return list;
	}

	@Override
	public Product addProduct(ProductDTO productDTO, Integer sellerId, Integer catId,MultipartFile imageFile) {
		Product product2 = null;
		System.out.println("productDTO "+productDTO);
		
		try {
			System.out.println("in product modification stage !!!!1");
			Product product = new Product();
			BeanUtils.copyProperties(productDTO, product);
			Seller s = sellerRepo.findById(sellerId).get();
			product.setSeller(s);
			product.setCategory(categoryRepo.findById(catId).get());
			System.out.println("category success");
			 String processed=null;
			System.out.println("image"+imageFile);
			  if(!imageFile.isEmpty()) { System.out.println("Image found");{
				 String name =LocalDateTime.now().toString();
				 processed = name.replace(":", "")+imageFile.getOriginalFilename();
				 System.out.println("process"+processed);
				  imageFile.transferTo(new File(location,processed));
			 
			  
			  String
			  path=location+"/"+processed;
			  System.out.println("path : "+path);
			  System.out.println("path bytes "+path.getBytes());
			  product.setPicture(path.getBytes()); }
			  }
			 
			// BL
			product.setUnitsSold(0);
			product.setAvgRating(0.0);
			System.out.println("product "+product);
			product2 = productRepo.save(product);
		} catch (Exception e) {
			// yet to handle other exceptions
			throw new ProductHandlingException(e.getMessage());
		}

		return product2;
	}

	@Override
	public String editProduct(ProductDTO productDTO,MultipartFile imageFile) throws IllegalStateException, IOException {
		Product product = productRepo.findById(productDTO.getProductId()).get(); // product : persistent
		System.out.println("in edit product service , before : " + product);
		Seller seller = product.getSeller();
		BeanUtils.copyProperties(productDTO, product,"picture");
		if(!imageFile.isEmpty())
		{
			String name =LocalDateTime.now().toString();
			 String processed = name.replace(":", "");
			 System.out.println("process"+processed);
			  imageFile.transferTo(new File(location,processed+imageFile.getOriginalFilename()));
			
		}
		product.setSeller(seller);
		// dirty checking
		System.out.println("in edit product service , after : " + product);
		return "product : " + product.getProductCatalogue().getProductName() + " updated successfully";
	}

	@Override
	public String restockProduct(RestockProductDTO restockProductDTO) {
		Product product = productRepo.findById(restockProductDTO.getProductId()).get();
		int oldStock = product.getUnitsStock();
		System.out.println("in restock product, old stock :" + oldStock);
		product.setUnitsStock(oldStock + restockProductDTO.getQuantity());
		System.out.println("in restock product, new stock :" + product.getUnitsStock());
		return "Product restocked from :" + oldStock + " to :" + product.getUnitsStock();
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
	public Seller saveSeller(SellerSignupRequest seller) {
		Seller newSeller = new Seller();
		BeanUtils.copyProperties(seller, newSeller);
		System.out.println("newUser:" + newSeller);
		newSeller.setStatus(SellerStatus.PENDING);
		newSeller.setRegDate(LocalDate.now());

		return sellerRepo.save(newSeller); // DirtyChecking and insert query
	}

	@Override
	public List<Complaint> getAllComplaintsBySellerId(Integer sellerId) {
		return compRepo.findAllBySellerId(sellerId);
	}
	
	@Override
	public String getImage(int id) throws IOException {

		//System.out.println("in img download 2 " + (location + imgName));
		Product p=productRepo.findById(id).get();
		System.out.println("in service "+new String(p.getPicture()));
		if(p!=null)
			return new String(p.getPicture());
		return null;		
		
	}

	

}
