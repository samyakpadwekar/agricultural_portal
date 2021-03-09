package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="bank_details")
public class BankDetails {
//UserId	IFSCcode	AccNo	HolderName	PhoneNo
	//private Integer userId;
	@Column(length =30)
	private String ifscCode;
	@Column(length =30)
	private String accNo;
	@Column(length =30)
	private String holderName;
	@Column(length =30)
	private String phoneNo;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="user_id",nullable=false)
	private User holder; 
	
	public BankDetails() {
	}

	public BankDetails(String ifscCode, String accNo, String holderName, String phoneNo, User holder) {
		super();
		this.ifscCode = ifscCode;
		this.accNo = accNo;
		this.holderName = holderName;
		this.phoneNo = phoneNo;
		this.holder = holder;
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

	public User getHolder() {
		return holder;
	}

	public void setHolder(User holder) {
		this.holder = holder;
	}
	
	
}
