package com.app.dto;

import java.util.List;

import com.app.pojos.Complaint;

public class ComplaintList {
	private List<Complaint> complaintList;
	public ComplaintList() {
	}
	public ComplaintList(List<Complaint> complaintList) {
		super();
		this.complaintList = complaintList;
	}
	public List<Complaint> getComplaintList() {
		return complaintList;
	}
	public void setComplaintList(List<Complaint> complaintList) {
		this.complaintList = complaintList;
	}
	
}
