package com.app.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Cart;

import java.util.List;
import java.util.Optional;
@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	Optional<Cart> findByUserIdAndProductId(Integer userId, Integer productId);
	
	@Query("select distinct c.sellerId from Cart c")
    int[] findDistinctSellerId();
	
	@Query("select c from Cart c where c.userId=:uid and c.sellerId=:sid")
	List<Cart> findAllByUserIdAndSellerId(@Param("uid") Integer userId, @Param("sid") int sellerId);
	
    List<Cart> findAllByUserIdOrderByCreatedDateDesc(Integer userId);
    Integer deleteByUserId(Integer userId);
}