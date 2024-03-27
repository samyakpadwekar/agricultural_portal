package com.app.custom_excs;

public class SellerHandlingException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public SellerHandlingException(String mesg) {
		super(mesg);
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
