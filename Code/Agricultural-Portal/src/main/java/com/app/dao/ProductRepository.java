package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
	
	@Query("select p from Product p left outer join fetch p.category where p.category.catName=:nm")
	List<Product> findByCategoryName(@Param("nm") String categoryName);
   
   	@Query("select p from Product p left outer join fetch p.seller join fetch p.category join fetch p.productCatalogue where p.seller.sellerId=:slid")
	List<Product> findBySellerId(@Param("slid") Integer sellerId);

   	@Query("select p from Product p left outer join fetch p.productCatalogue join fetch p.category where p.productCatalogue.productName=:searchvalue OR p.category.catName=:searchvalue")
	List<Product> getProductByNameOrCategory(String searchvalue);
}
