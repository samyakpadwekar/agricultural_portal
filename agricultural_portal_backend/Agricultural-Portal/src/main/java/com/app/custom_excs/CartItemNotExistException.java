package com.app.custom_excs;

public class CartItemNotExistException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public CartItemNotExistException(String message) {
		super(message);
	}
}
