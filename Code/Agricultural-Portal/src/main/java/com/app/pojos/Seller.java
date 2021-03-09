package com.app.pojos;

import java.time.LocalDate;

public class Seller {
//	 Id FName LName Bussiness Name Email
//	 MobileNo.	Password	ValidationNumber(GSTIN)	DateRegistered
	private Integer sellerId;
	private String firstName;
	private String lastName;
	private String bussinessName;
	private String email;
	private String mobileNo;
	private String password;
	private String validationNo;
	private LocalDate regDate;
	
	public Seller() {
	}

	public Seller(Integer sellerId, String firstName, String lastName, String bussinessName, String email,
			String mobileNo, String password, String validationNo, LocalDate regDate) {
		super();
		this.sellerId = sellerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.bussinessName = bussinessName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
		this.validationNo = validationNo;
		this.regDate = regDate;
	}

	public Integer getSellerId() {
		return sellerId;
	}

	public void setSellerId(Integer sellerId) {
		this.sellerId = sellerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getBussinessName() {
		return bussinessName;
	}

	public void setBussinessName(String bussinessName) {
		this.bussinessName = bussinessName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getValidationNo() {
		return validationNo;
	}

	public void setValidationNo(String validationNo) {
		this.validationNo = validationNo;
	}

	public LocalDate getRegDate() {
		return regDate;
	}

	public void setRegDate(LocalDate regDate) {
		this.regDate = regDate;
	}
	
	
}
