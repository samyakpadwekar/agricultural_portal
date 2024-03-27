package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ProductCatalogue;

public interface ProductCatalogueRepository extends JpaRepository<ProductCatalogue, Integer> {

	List<ProductCatalogue> findAllByOrderByProductUid();

}
