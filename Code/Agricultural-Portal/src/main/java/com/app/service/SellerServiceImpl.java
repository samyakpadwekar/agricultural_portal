package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.SellerRepository;

@Service
@Transactional
public class SellerServiceImpl implements ISellerService {

	
	@Autowired
	private SellerRepository sellerRepo;
	

}
