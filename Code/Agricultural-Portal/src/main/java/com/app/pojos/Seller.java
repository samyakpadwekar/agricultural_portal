package com.app.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "sellers")
public class Seller {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer sellerId;

	@Column(length = 20, unique = true, nullable = false)
	private String userName;

	@Column(length = 30, nullable = false)
	@NotBlank(message = "Required")
	private String firstName;

	@Column(length = 30, nullable = false)
	@NotBlank(message = "Required")
	private String lastName;

	@Column(length = 50)
	@NotBlank(message = "Required")
	private String businessName;

	@Column(length = 50, unique = true, nullable = false)
	@NotNull(message = "Required")
	@NotBlank(message = "Required")
	@Email(message = "Enter valid email")
	private String email;

	@Column(length = 15, nullable = false)
	private String mobileNo;

	@Column(length = 200, nullable = false)
//	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})", message = "Invalid password!")
	private String password;

	@Column(length = 20)
//	@Pattern(regexp = "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$", message = "Invalid password!")
	private String gstin;

	@Column(length = 20)
	private String aadharNo;

	@Column(length = 20)
	private String pan;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate regDate;

	@Embedded
	private Address address;

	@Embedded
	private BankDetails bankDetail;

	@Enumerated(EnumType.STRING)
	@Column(length = 12, nullable = false)
	private SellerStatus status;

	@JsonIgnore
	@OneToMany(cascade = CascadeType.ALL, mappedBy = "seller", orphanRemoval = true)
	private List<Product> products;

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public Seller() {
	}

	public Seller(Integer sellerId, String userName, @NotBlank(message = "Required") String firstName,
			@NotBlank(message = "Required") String lastName, @NotBlank(message = "Required") String businessName,
			@NotNull(message = "Required") @NotBlank(message = "Required") @Email(message = "Enter valid email") String email,
			String mobileNo, String password, String gstin, String aadharNo, String pan, LocalDate regDate,
			Address address, BankDetails bankDetail, SellerStatus status, List<Product> products) {
		super();
		this.sellerId = sellerId;
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.businessName = businessName;
		this.email = email;
		this.mobileNo = mobileNo;
		this.password = password;
		this.gstin = gstin;
		this.aadharNo = aadharNo;
		this.pan = pan;
		this.regDate = regDate;
		this.address = address;
		this.bankDetail = bankDetail;
		this.status = status;
		this.products = products;
	}

	public Integer getSellerId() {
		return sellerId;
	}

	public void setSellerId(Integer sellerId) {
		this.sellerId = sellerId;
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

	public String getBusinessName() {
		return businessName;
	}

	public void setBusinessName(String bussinessName) {
		this.businessName = bussinessName;
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

	public String getAadharNo() {
		return aadharNo;
	}

	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	@Override
	public String toString() {
		return "Seller [sellerId=" + sellerId + ", userName=" + userName + ", firstName=" + firstName + ", lastName="
				+ lastName + ", businessName=" + businessName + ", email=" + email + ", mobileNo=" + mobileNo
				+ ", password=" + password + ", gstin=" + gstin + ", aadharNo=" + aadharNo + ", pan=" + pan
				+ ", regDate=" + regDate + ", address=" + address + ", bankDetail=" + bankDetail + ", status=" + status
				+ "]";
	}

}
