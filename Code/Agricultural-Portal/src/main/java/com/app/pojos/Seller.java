package com.app.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "sellers")
public class Seller {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer sellerId;
	
	@Column(length = 30)
	@NotBlank(message = "Required")
	private String firstName;
	
	@Column(length = 30)
	@NotBlank(message = "Required")
	private String lastName;
	
	@Column(length = 50)
	@NotBlank(message = "Required")
	private String bussinessName;
	
	@Column(length = 50)
	@NotNull(message = "Required")
	@Email(message = "Enter valid email")
	private String email;
	
	@Column(length = 15)
	private String mobileNo;
	
	@Column(length = 20, nullable = false)
	@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Invalid password!")
	private String password;
	
	@Column(length = 20)
	@Pattern(regexp="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$",message = "Invalid password!")
	private String gstin;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate regDate;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "selectedUser", orphanRemoval = true)
	private List<Address> addresses;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "selectedUser", orphanRemoval = true)
	private List<BankDetails> bankDetails;
	
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "soldBySeller", orphanRemoval = true)
	private List<Product> products;
	
	public Seller() {
	}

	public Seller(Integer sellerId, String firstName, String lastName, String bussinessName, String email,
			String mobileNo, String password, String gstin, LocalDate regDate) {
		super();
		this.sellerId = sellerId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.bussinessName = bussinessName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
		this.gstin = gstin;
		this.regDate = regDate;
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

	public String getBussinessName() {
		return bussinessName;
	}

	public void setBussinessName(String bussinessName) {
		this.bussinessName = bussinessName;
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
	
	
}
