package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Seller;

public interface SellerRepository extends JpaRepository<Seller, Integer> {

	@Query("select s from Seller s left outer join fetch s.products where s.businessName=:nm")
	Optional<Seller> findByBusinessName(@Param("nm")String businessName);	
	@Query("select s from Seller s left outer join fetch s.products")
	List<Seller> findAllSeller();
	
}
