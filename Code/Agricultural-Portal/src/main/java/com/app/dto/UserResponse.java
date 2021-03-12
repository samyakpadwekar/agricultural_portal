package com.app.dto;



import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.app.pojos.Address;
import com.app.pojos.BankDetails;
import com.app.pojos.Role;

public class UserResponse {

		
		private Integer userId;

		
		private String firstName;

		
		private String lastName;

		
		private String email;

		
		private String mobileNo;

		
		private String password;

		
		private LocalDate regDate;
		
		private Address address;

		
		private BankDetails bankDetail;

		
		private Role role;

//		@JsonIgnoreProperties(value = "seller_id")
//		@OneToMany(cascade = CascadeType.ALL, mappedBy = "seller", orphanRemoval = true)
//		private List<Product> products;

//		@JsonIgnore
//		@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
//		@JoinColumn(name = "cart_id")
//		private Cart cart;

		public UserResponse() {
		}

		public UserResponse(Integer userId, String firstName, String lastName, String email, String mobileNo, String password,
				LocalDate regDate) {
			super();
			this.userId = userId;
			this.firstName = firstName;
			this.lastName = lastName;
			this.email = email;
			this.mobileNo = mobileNo;
			this.password = password;
			this.regDate = regDate;
		}

		public Integer getUserId() {
			return userId;
		}

		public void setUserId(Integer userId) {
			this.userId = userId;
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

		public BankDetails getBankDetails() {
			return bankDetail;
		}

		public void setBankDetails(BankDetails bankDetail) {
			this.bankDetail = bankDetail;
		}

		public Address getAddresses() {
			return address;
		}

		public void setAddresses(Address address) {
			this.address = address;
		}

		@Override
		public String toString() {
			return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
					+ ", mobileNo=" + mobileNo + ", password=" + password + ", regDate=" + regDate + ", address=" + address
					+ ", bankDetail=" + bankDetail + ", role=" + role + "]";
		}

	}
