package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.enums.SellerStatus;
import com.app.pojos.Seller;

public interface SellerRepository extends JpaRepository<Seller, Integer> {

	@Query("select s from Seller s left outer join fetch s.products where s.businessName=:nm")
	Optional<Seller> findByBusinessName(@Param("nm") String businessName);

	@Modifying
	@Query("update Seller s set s.status=:st where s.id=:id")
	int updateStatus(@Param("st") SellerStatus status, @Param("id") int id);
	
	Optional<Seller> findByUserNameAndPassword(String username,String password);
	
	@Query("select s from Seller s left outer join fetch s.address where s.address.pinCode=:pincode")
	List<Seller> findByPinCode(@Param("pincode") String pinCode);
	
}
