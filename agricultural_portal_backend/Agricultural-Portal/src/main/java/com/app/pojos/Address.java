package com.app.pojos;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Embeddable/*
		 * to specify whatever follows is a value type(composite type) does not have its
		 * own identity does not have independent life cycle, depends TOTALLY upon
		 * owning entity
		 */
public class Address {
//PinCode 	AddLine1	Add line2	
	// Landmark City State Country(India)

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

	public Address() {
	}

	public Address(@NotBlank(message = "required") String pinCode, @NotBlank(message = "required") String line1,
			@NotBlank(message = "required") String line2, @NotBlank(message = "required") String landMark,
			@NotBlank(message = "required") String city, @NotBlank(message = "required") String state,
			@NotBlank(message = "required") String country) {
		super();
		this.pinCode = pinCode;
		this.line1 = line1;
		this.line2 = line2;
		this.landMark = landMark;
		this.city = city;
		this.state = state;
		this.country = country;
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

	@Override
	public String toString() {
		return "Address [pinCode=" + pinCode + ", line1=" + line1 + ", line2=" + line2 + ", landMark=" + landMark
				+ ", city=" + city + ", state=" + state + ", country=" + country + "]";
	}

}