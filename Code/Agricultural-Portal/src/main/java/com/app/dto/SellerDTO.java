package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.Address;
import com.app.pojos.BankDetails;
import com.app.pojos.SellerStatus;

public class SellerDTO {
	private Integer sellerId;

	private String firstName;

	private String lastName;

	private String businessName;

	private String email;

	private String mobileNo;

	private String password;

	private String gstin;

	private LocalDate regDate;

	private Address address;

	private BankDetails bankDetail;

	private SellerStatus status;

	public SellerDTO() {
	}

	public SellerDTO(Integer sellerId, String firstName, String lastName, String businessName, String email,
			String mobileNo, String password, String gstin, LocalDate regDate, Address address, BankDetails bankDetail,
			SellerStatus status) {
		super();
		this.sellerId = sellerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.businessName = businessName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
		this.gstin = gstin;
		this.regDate = regDate;
		this.address = address;
		this.bankDetail = bankDetail;
		this.status = status;
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

	public String getBusinessName() {
		return businessName;
	}

	public void setBusinessName(String businessName) {
		this.businessName = businessName;
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

	public String getGstin() {
		return gstin;
	}

	public void setGstin(String gstin) {
		this.gstin = gstin;
	}

	public LocalDate getRegDate() {
		return regDate;
	}

	public void setRegDate(LocalDate regDate) {
		this.regDate = regDate;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public BankDetails getBankDetail() {
		return bankDetail;
	}

	public void setBankDetail(BankDetails bankDetail) {
		this.bankDetail = bankDetail;
	}

	public SellerStatus getStatus() {
		return status;
	}

	public void setStatus(SellerStatus status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "SellerDTO [sellerId=" + sellerId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", businessName=" + businessName + ", email=" + email + ", mobileNo=" + mobileNo + ", password="
				+ password + ", gstin=" + gstin + ", regDate=" + regDate + ", address=" + address + ", bankDetail="
				+ bankDetail + ", status=" + status + "]";
	}

}
