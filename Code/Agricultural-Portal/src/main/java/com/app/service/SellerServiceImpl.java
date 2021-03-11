package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.SellerRepository;
import com.app.pojos.Seller;

@Service
@Transactional
public class SellerServiceImpl implements ISellerService {

	
	@Autowired
	private SellerRepository sellerRepo;
	@Override
	public List<Seller> getAllSeller() {
		return sellerRepo.findAllSeller();
	}

}
