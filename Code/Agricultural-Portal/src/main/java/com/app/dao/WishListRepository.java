package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Wishlist;

public interface WishListRepository extends JpaRepository<Wishlist, Integer> {
    
    //Method for fetching the wishlist of a particular user and order it by created_date
    List<Wishlist> findAllByUserIdOrderByCreatedDateDesc(Integer userId);
    
}