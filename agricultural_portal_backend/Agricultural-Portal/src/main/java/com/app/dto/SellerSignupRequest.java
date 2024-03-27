package com.app.dto;

public class SellerSignupRequest {
	private String userName;
	private String firstName;
	private String lastName;
	private String businessName;
	private String mobileNo;
	private String email;
	private String password;
	private String gstin;
	private String aadharNo;
	private String pan;

	public SellerSignupRequest() {
		System.out.println("In ctor of LoginRequest");
	}

	public SellerSignupRequest(String userName, String firstName, String lastName, String mobileNo, String email,
			String password, String aadharNo, String pan) {
		super();
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.mobileNo = mobileNo;
		this.email = email;
		this.password = password;
		this.aadharNo = aadharNo;
		this.pan = pan;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getBusinessName() {
		return businessName;
	}

	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}

	public String getGstin() {
		return gstin;
	}

	public void setGstin(String gstin) {
		this.gstin = gstin;
	}

	public String getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	@Override
	public String toString() {
		return "SellerSignupRequest [userName=" + userName + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", businessName=" + businessName + ", mobileNo=" + mobileNo + ", email=" + email + ", password="
				+ password + ", gstin=" + gstin + ", aadharNo=" + aadharNo + ", pan=" + pan + "]";
	}

}
