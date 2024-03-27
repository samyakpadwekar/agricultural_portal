package com.app.dto;

import javax.validation.constraints.NotNull;

import com.app.enums.ComplaintStatus;

public class SellerCompDTO {

	private Integer complaintId;

	private @NotNull Integer userId;

	private @NotNull Integer productId;

	private String complaint;
	
	public SellerCompDTO() {
		System.out.println("In Seller Complaint DTO");
	}
	

	public SellerCompDTO(Integer complaintId, @NotNull Integer userId, @NotNull Integer productId, String complaint) {
		super();
		this.complaintId = complaintId;
		this.userId = userId;
		this.productId = productId;
		this.complaint = complaint;
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


	@Override
	public String toString() {
		return "SellerCompDTO [complaintID=" + complaintId + ", userId=" + userId + ", productId=" + productId
				+ ", complaint=" + complaint +"]";
	}
	
	
	
	

}
