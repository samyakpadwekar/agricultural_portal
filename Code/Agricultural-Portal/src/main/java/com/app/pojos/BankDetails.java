package com.app.pojos;

public class BankDetails {
//UserId	IFSCcode	AccNo	HolderName	PhoneNo
	private Integer userId;
	private String ifscCode;
	private String accNo;
	private String holderName;
	private String phoneNo;

	public BankDetails() {
	}

	public BankDetails(Integer userId, String ifscCode, String accNo, String holderName, String phoneNo) {
		super();
		this.userId = userId;
		this.ifscCode = ifscCode;
		this.accNo = accNo;
		this.holderName = holderName;
		this.phoneNo = phoneNo;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public String getAccNo() {
		return accNo;
	}

	public void setAccNo(String accNo) {
		this.accNo = accNo;
	}

	public String getHolderName() {
		return holderName;
	}

	public void setHolderName(String holderName) {
		this.holderName = holderName;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	
	
	
}
