package com.app.custom_excs;

public class ProductCatalogueHandlingException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public ProductCatalogueHandlingException(String errMsg) {
		super(errMsg);	}

}
