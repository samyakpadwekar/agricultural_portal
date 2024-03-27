package com.app.exc_handller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.app.custom_excs.ProductCatalogueHandlingException;
import com.app.custom_excs.ProductFeedbackHandlingException;
import com.app.custom_excs.ProductHandlingException;
import com.app.custom_excs.SellerHandlingException;
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
		return new ResponseEntity<ErrorResponse>(new ErrorResponse("Invalid Login", "Wrong Credentials"),HttpStatus.UNAUTHORIZED);
	}
	
	@ExceptionHandler(SellerHandlingException.class)
	public ResponseEntity<?> handleSellerException(SellerHandlingException e)
	{
		System.out.println("in handle seller exc");
		return new ResponseEntity<>(new ErrorResponse("Seller error",e.getMessage()), HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(ProductHandlingException.class)
	public ResponseEntity<?> handleProductException(ProductHandlingException p){
		System.out.println("in handle product exception");
		return new ResponseEntity<>(new ErrorResponse("Product error", p.getMessage()), HttpStatus.CONFLICT);
	}
	
	@ExceptionHandler(ProductCatalogueHandlingException.class)
	public ResponseEntity<?> handleProductCatalogueException(ProductCatalogueHandlingException p){
		System.out.println("in handle product catalogue exception");
		return new ResponseEntity<>(new ErrorResponse("Product Catalogue error", p.getMessage()), HttpStatus.CONFLICT);
	}
	
	@ExceptionHandler(ProductFeedbackHandlingException.class)
	public ResponseEntity<?> handleProductFeedbackException(ProductFeedbackHandlingException p){
		System.out.println("in handle product feedback exception");
		return new ResponseEntity<>(new ErrorResponse("Product feedback error", p.getMessage()), HttpStatus.CONFLICT);
	}
	
}









