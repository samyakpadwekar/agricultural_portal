package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.OrderDetails;

public interface OrderDetailsRepository extends JpaRepository<OrderDetails, Integer> {

	List<OrderDetails> findByOrderOrderId(int orderId);
	List<OrderDetails> findAllByOrderOrderId(Integer orderId);
	
	@Query("select od from OrderDetails od where od.product.seller.sellerId=:slid")
	List<OrderDetails> findOrderDetailsBySellerId(@Param("slid") Integer sellerId);
}
