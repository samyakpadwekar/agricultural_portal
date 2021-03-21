package com.app.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Order;

public interface OrderRepository extends JpaRepository<Order, Integer> {
//	@Query("select o from Order o left outer join fetch o.buyer where o.buyer.userId=:uId order by o.orderDate desc limit 1")
//	Order findOrderByUserId(@Param("uId") Integer userId);
	
	Order findFirstByOrderByOrderIdDesc();

	List<Order> findByBuyerUserId(int user);
	
	@Query("select o FROM Order o WHERE o.orderDate >=:tD")
	List<Order> findAllByOrderDateGreaterThanEqual(@Param("tD") LocalDateTime orderDate);


}
