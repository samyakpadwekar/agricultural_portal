package com.app.pojos;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "addresses")
public class Address {
//	UserId	FullName	MobileNo	PinCode 	AddLine1	Add line2	
	// Landmark City State Country(India)
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer addressId;

	@Column(length = 20, nullable = false)
	@NotBlank(message = "required")
	private String fullName;

	@Column(length = 20, nullable = false)
	@NotBlank(message = "required")
	private String mobileNumber;

	@Column(length = 10)
	@NotBlank(message = "required")
	private String pinCode;

	@Column(length = 100)
	@NotBlank(message = "required")
	private String line1;

	@Column(length = 100)
	@NotBlank(message = "required")
	private String line2;

	@Column(length = 100)
	@NotBlank(message = "required")
	private String landMark;

	@Column(length = 25)
	@NotBlank(message = "required")
	private String city;

	@Column(length = 25)
	@NotBlank(message = "required")
	private String state;

	@Column(length = 25)
	@NotBlank(message = "required")
	private String country;

	@ManyToOne
	@JoinColumns({ @JoinColumn(name = "user_id", referencedColumnName = "user_id"),
			@JoinColumn(name = "user_id", referencedColumnName = "seller_id") })
	private Object selectedUser;

	public Address() {
	}

	public Address(Integer addressId, String fullName, String mobileNumber, String pinCode, String line1, String line2,
			String landMark, String city, String state, String country) {
		super();
		this.addressId = addressId;
		this.fullName = fullName;
		this.mobileNumber = mobileNumber;
		this.pinCode = pinCode;
		this.line1 = line1;
		this.line2 = line2;
		this.landMark = landMark;
		this.city = city;
		this.state = state;
		this.country = country;
	}

	public Integer getUserId() {
		return addressId;
	}

	public void setUserId(Integer userId) {
		this.addressId = userId;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	public String getLine1() {
		return line1;
	}

	public void setLine1(String line1) {
		this.line1 = line1;
	}

	public String getLine2() {
		return line2;
	}

	public void setLine2(String line2) {
		this.line2 = line2;
	}

	public String getLandMark() {
		return landMark;
	}

	public void setLandMark(String landMark) {
		this.landMark = landMark;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

}
