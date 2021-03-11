package com.app.dto;

import java.util.List;

import com.app.pojos.User;

public class CustomerList {
	private List<User> customerList;
	
	public CustomerList() {
	}

	public CustomerList(List<User> customerList) {
		super();
		this.customerList = customerList;
	}

	public List<User> getCustomerList() {
		return customerList;
	}

	public void setCustomerList(List<User> customerList) {
		this.customerList = customerList;
	}
	
}
