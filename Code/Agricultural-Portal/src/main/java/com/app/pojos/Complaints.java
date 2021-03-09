package com.app.pojos;

public class Complaints {
//complaintId 	buyerId	productId	Complaint	Status
	private Integer complaintId;
	private Integer customerId;
	private Integer productId;
	private String complaint;
	private String Status;
	
	public Complaints() {
	}

	public Complaints(Integer complaintId, Integer customerId, Integer productId, String complaint, String status) {
		super();
		this.complaintId = complaintId;
		this.customerId = customerId;
		this.productId = productId;
		this.complaint = complaint;
		Status = status;
	}

	public Integer getcId() {
		return complaintId;
	}

	public void setcId(Integer cId) {
		this.complaintId = cId;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
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

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}
	
	
}
