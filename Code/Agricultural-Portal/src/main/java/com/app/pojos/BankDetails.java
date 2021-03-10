package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class BankDetails {
//UserId	IFSCcode	AccNo	HolderName	PhoneNo

	@Column(length = 30)
	private String ifscCode;
	@Column(length = 30)
	private String accNo;

	public BankDetails() {
	}

	public BankDetails(String ifscCode, String accNo) {
		super();
		this.ifscCode = ifscCode;
		this.accNo = accNo;
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

	@Override
	public String toString() {
		return "BankDetails [ifscCode=" + ifscCode + ", accNo=" + accNo + "]";
	}
	

}
