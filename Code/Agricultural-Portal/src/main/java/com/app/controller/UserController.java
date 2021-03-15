package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.config.JwtTokenUtil;
import com.app.dto.SignupRequest;
import com.app.dto.UserResponse;
import com.app.model.JwtRequest;
import com.app.model.JwtResponse;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private AuthenticationManager authenticationManager;

//	@Autowired
//	private JwtUserDetailsService userDetailsService;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private IUserService userService;

	public UserController() {
		System.out.println("In ctor of " + getClass().getName());
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticateUser(@RequestBody JwtRequest authenticationRequest) throws Exception {
		System.out.println("in auth " + authenticationRequest);
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
		final UserDetails userDetails = userService.loadUserByUsername(authenticationRequest.getUsername());
		final String token = jwtTokenUtil.generateToken(userDetails);
		return new ResponseEntity<>(new JwtResponse(token), HttpStatus.OK);
	}

	@PostMapping("/register")
	public ResponseEntity<?> saveUser(@RequestBody SignupRequest user) throws Exception {
		System.out.println("in sign up function user :" + user);
		return ResponseEntity.ok(userService.saveUser(user));

	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}

	@PutMapping("/edit-profile")
	public ResponseEntity<?> editProfile(@RequestBody UserResponse u) {
		System.out.println("in edit profile function user :" + u);
		return ResponseEntity.ok(userService.editProfile(u));

	}

}
