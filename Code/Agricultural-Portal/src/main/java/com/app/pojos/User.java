package com.app.pojos;

import java.time.LocalDate;

public class User {
//	Id	FName	LName	Email	MobileNo.	Password	PostalCode	DateRegistered	Role
	private Integer userId;
	private String firstName;
	private String lastName;
	private String email;
	private String mobileNo;
	private String password;
	private String pin;
	private LocalDate regDate;
	private Role role;

	public User() {
	}

	public User(Integer id, String firstName, String lastName, String email, String mobileNumber, String password,
			String pin, LocalDate regDate, Role role) {
		super();
		this.userId = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.mobileNo = mobileNumber;
		this.password = password;
		this.pin = pin;
		this.regDate = regDate;
		this.role = role;
	}

	public Integer getId() {
		return userId;
	}

	public void setId(Integer id) {
		this.userId = id;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMobileNumber() {
		return mobileNo;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNo = mobileNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public LocalDate getRegDate() {
		return regDate;
	}

	public void setRegDate(LocalDate regDate) {
		this.regDate = regDate;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [id=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", mobileNumber=" + mobileNo + ", pin=" + pin + ", regDate=" + regDate + ", role=" + role + "]";
	}

}
