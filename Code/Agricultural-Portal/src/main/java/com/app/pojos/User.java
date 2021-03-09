package com.app.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "users")
public class User {
//	Id	FName	LName	Email	MobileNo.	Password	PostalCode	DateRegistered	Role
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;
	
	@Column(length = 20)
	@NotBlank(message = "required")
	private String firstName;
	
	@Column(length = 20)
	@NotBlank(message = "required")	
	private String lastName;
	
	@Column(length = 50,unique = true)
	@Email(message = "Enter valid email")
	@NotBlank(message = "required")
	private String email;
	
	@Column(length = 15,unique = true)
	private String mobileNo;
	
	@Pattern(regexp="((?=.\\d)(?=.[a-z])(?=.[#@$]).{5,20})",message = "Invalid password!")
	@NotBlank(message = "required")
	private String password;
	
	@NotBlank(message = "required")
	@Column(length = 10)
	private String pin;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate regDate;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy ="selectedUser",orphanRemoval = true)
	private List<Address> address;
	
	@OneToMany(cascade = CascadeType.ALL,mappedBy ="selectedUser",orphanRemoval = true)
	private List<BankDetails> bankDetails;
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
