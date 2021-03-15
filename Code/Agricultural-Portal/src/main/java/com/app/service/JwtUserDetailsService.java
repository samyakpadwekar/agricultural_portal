package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.dto.SignupRequest;
import com.app.pojos.Role;
import com.app.pojos.User;

//import com.javainuse.dao.UserDao; //userRepo
//import com.javainuse.model.DAOUser;	//User
//import com.javainuse.model.UserDTO;	//UserDTO	//LoginRequest

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
		com.app.pojos.User user = userRepo.findByUserName(userName);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + userName);
		}
		return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
				new ArrayList<>());
	}

//	public DAOUser save(UserDTO user) {
//		DAOUser newUser = new DAOUser();
//		newUser.setUsername(user.getUsername());
//		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
//		return userDao.save(newUser);
//	}
	public com.app.pojos.User save(SignupRequest signupRequest) {
		com.app.pojos.User newUser = new User();
//		newUser.setUserName(signupRequest.getUserName());
//		
//		newUser.setEmail(signupRequest.getEmail());
//		newUser.setPassword(bcryptEncoder.encode(signupRequest.getPassword()));
//		newUser.setRegDate(LocalDate.now());
//		newUser.setMobileNo(signupRequest.getMobileNo());
//		newUser.setRole(Role.valueOf(signupRequest.getRole().toUpperCase()));
		BeanUtils.copyProperties(signupRequest, newUser, "password", "role");
		System.out.println("newUser:" + newUser);
		newUser.setPassword(bcryptEncoder.encode(signupRequest.getPassword()));
		newUser.setRole(Role.valueOf(signupRequest.getRole().toUpperCase()));
		newUser.setRegDate(LocalDate.now());
		return userRepo.save(newUser); // DirtyChecking and insert query
	}

}