package com.app.dto;

import java.util.ArrayList;
import java.util.List;

import com.app.pojos.Order;

public class OrderListDTO {
	
	private List<Order> orderList = new ArrayList<Order>();
	
	public OrderListDTO() {
		// TODO Auto-generated constructor stub
	}

	public OrderListDTO(List<Order> orderList) {
		super();
		this.orderList = orderList;
	}

	public List<Order> getOrderList() {
		return orderList;
	}

	public void setOrderList(List<Order> orderList) {
		this.orderList = orderList;
	}

}
