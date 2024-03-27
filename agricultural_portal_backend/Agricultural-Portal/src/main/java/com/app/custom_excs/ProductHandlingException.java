package com.app.custom_excs;


public class ProductHandlingException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public ProductHandlingException(String message) {
		super(message);
	}
}
