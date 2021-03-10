package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excs.UserHandlingException;
import com.app.dao.UserRepository;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User authenticateUser(String email, String password) {
		
		return userRepo.findByEmailAndPassword(email, password).orElseThrow(()-> new UserHandlingException("Invalid Credentials..!"));
	}

}
