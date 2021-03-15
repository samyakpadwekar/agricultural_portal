package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Seller;
import com.app.pojos.SellerStatus;

public interface SellerRepository extends JpaRepository<Seller, Integer> {

	@Query("select s from Seller s left outer join fetch s.products where s.businessName=:nm")
	Optional<Seller> findByBusinessName(@Param("nm") String businessName);

	@Modifying
	@Query("update Seller s set s.status=:st where s.id=:id")
	int updateStatus(@Param("st") SellerStatus status, @Param("id") int id);
	
	Optional<Seller> findByEmailAndPassword(String email,String password);
	
	@Query("select s from Seller s left outer join fetch s.address where s.address.pinCode=:pincode")
	List<Seller> findByPinCode(@Param("pincode") String pinCode);
	
	Seller findByUserName(String userName);
}
