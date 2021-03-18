package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import com.app.enums.ComplaintStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="complaint",uniqueConstraints=
@UniqueConstraint(columnNames={"uid", "pid"}))
public class Complaint {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer complaintId;
	
	@Column(name = "uid")
    private @NotNull Integer userId;
	
	@Column(name = "pid")
    private @NotNull Integer productId;
	
	@Column(length=100)
	private String complaint;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 10, nullable = false)
	private ComplaintStatus status;
	
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "uid", insertable = false, updatable = false)
	private User user;

	@JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "pid" , insertable = false, updatable = false )
	private Product product;
	
	public Complaint() {
		// TODO Auto-generated constructor stub
	}

	
	
	public Complaint(@NotNull Integer userId, @NotNull Integer productId, String complaint, ComplaintStatus status) {
		super();
		this.userId = userId;
		this.productId = productId;
		this.complaint = complaint;
		this.status = status;
	}



	public Integer getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(Integer complaintId) {
		this.complaintId = complaintId;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getComplaint() {
		return complaint;
	}

	public void setComplaint(String complaint) {
		this.complaint = complaint;
	}

	public ComplaintStatus getStatus() {
		return status;
	}

	public void setStatus(ComplaintStatus status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Complaint [complaintId=" + complaintId + ", userId=" + userId + ", productId=" + productId
				+ ", complaint=" + complaint + ", status=" + status + "]";
	}
	
	
	
}
