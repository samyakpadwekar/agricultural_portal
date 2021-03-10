package com.app.exc_handller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.app.custom_excs.UserHandlingException;
import com.app.dto.ErrorResponse;

@ControllerAdvice
public class GlobalExceptionHandller extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@ExceptionHandler(UserHandlingException.class)
	public ResponseEntity<?> handleUserException(UserHandlingException e){
		System.out.println("in handle user exc");
		return new ResponseEntity<ErrorResponse>(new ErrorResponse("Invalid Login", "Wring Credentials"),HttpStatus.UNAUTHORIZED);
	}
	
}
