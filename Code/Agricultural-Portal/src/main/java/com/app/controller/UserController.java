package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequest;
import com.app.dto.SignupRequest;
import com.app.dto.UserResponse;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private IUserService userService;

	public UserController() {
		System.out.println("In ctor of " + getClass().getName());
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest request) {
		System.out.println("in auth " + request);
		return new ResponseEntity<>(userService.authenticateUser(request.getUsername(), request.getPassword()),
				HttpStatus.OK);
	}

	@PostMapping("/register")
	public ResponseEntity<?> saveUser(@RequestBody SignupRequest user) throws Exception {
		System.out.println("in sign up function user :" + user);
		return ResponseEntity.ok(userService.saveUser(user));

	}

	@PutMapping("/edit-profile")
	public ResponseEntity<?> editProfile(@RequestBody UserResponse u) {
		System.out.println("in edit profile function user :" + u);
		return ResponseEntity.ok(userService.editProfile(u));

	}

}
