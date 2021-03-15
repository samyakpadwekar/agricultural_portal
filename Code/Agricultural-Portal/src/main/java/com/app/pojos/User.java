package com.app.pojos;

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

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;

	@Column(length = 20, unique = true, nullable = false)
	private String userName;

	@Column(length = 30, nullable = false)
	@NotBlank(message = "Required")
	private String firstName;

	@Column(length = 30, nullable = false)
	@NotBlank(message = "Required")
	private String lastName;

	@Column(length = 50, unique = true, nullable = false)
	@NotBlank(message = "Required")
	@Email(message = "Enter valid email")
	private String email;

	@Column(length = 15, nullable = false)
	private String mobileNo;

	@Column(length = 255, nullable = false)
//	@Pattern(regexp = "((?=.\\d)(?=.[a-z])(?=.[#@$]).{5,20})", message = "Invalid password!")
	private String password;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate regDate;
	// PinCode AddLine1 Add line2
	// Landmark City State Country(India)

	@Embedded
	private Address address;

	@Embedded
	private BankDetails bankDetail;

	@Enumerated(EnumType.STRING)
	@Column(length = 10, nullable = false)
	private Role role;

//	@JsonIgnoreProperties(value = "seller_id")
//	@OneToMany(cascade = CascadeType.ALL, mappedBy = "seller", orphanRemoval = true)
//	private List<Product> products;

//	@JsonIgnore
//	@OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
//	@JoinColumn(name = "cart_id")
//	private Cart cart;

	public User() {
	}

	public User(Integer userId, String firstName, String lastName, String email, String mobileNo, String password,
			LocalDate regDate, String userName) {
		super();
		this.userId = userId;
		this.userName = userName;
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
		return "User [userId=" + userId + ",userName= " + userName + " firstName=" + firstName + ", lastName="
				+ lastName + ", email=" + email + ", mobileNo=" + mobileNo + ", password=" + password + ", regDate="
				+ regDate + ", address=" + address + ", bankDetail=" + bankDetail + ", role=" + role + "]";
	}

}