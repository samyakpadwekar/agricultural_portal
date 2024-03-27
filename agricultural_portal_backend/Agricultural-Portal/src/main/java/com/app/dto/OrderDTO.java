package com.app.dto;

import java.util.List;

import com.app.pojos.OrderDetails;

public class OrderDTO {
	
	private List<OrderDetails> orderlist;

	public OrderDTO(List<OrderDetails> orderlist) {
		this.orderlist=orderlist;
	}

	public List<OrderDetails> getOrderlist() {
		return orderlist;
	}

	public void setOrderlist(List<OrderDetails> orderlist) {
		this.orderlist = orderlist;
	}

	
	
}
