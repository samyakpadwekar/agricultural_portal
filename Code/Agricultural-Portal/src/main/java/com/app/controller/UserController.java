package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.UserResponse;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	private IUserService userService;
	
	public UserController() {
		System.out.println("In ctor of " + getClass().getName());
	}

	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {
		System.out.println("in auth "+ request);
		return new ResponseEntity<>(userService.authenticateUser(request.getEmail(), request.getPassword()),HttpStatus.OK);
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> signUp(@RequestBody UserResponse u)
	{
		System.out.println("in sign up function user :"+u);
		return ResponseEntity.ok(userService.userSignup(u));
		
	}
	
	@PutMapping("/edit-profile")
	public ResponseEntity<?> editProfile(@RequestBody UserResponse u)
	{
		System.out.println("in edit profile function user :"+u);
		return ResponseEntity.ok(userService.editProfile(u));
		
	}


}
