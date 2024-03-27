package com.app.dto;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.app.pojos.Product;
import com.app.pojos.User;

public class ProductFeedDTO {
	
	private Integer fid;
	
    private @NotNull Integer userId;
	
    private @NotNull Integer productId;
	
	private String feedback;
	
	private double rating;
	
	public ProductFeedDTO() {
		System.out.println("in Product Feedback DTO ");
	}



	public ProductFeedDTO(Integer fid, @NotNull Integer userId, @NotNull Integer productId, String feedback,
			double rating) {
		super();
		this.fid = fid;
		this.userId = userId;
		this.productId = productId;
		this.feedback = feedback;
		this.rating = rating;
	}



	public Integer getFid() {
		return fid;
	}

	public void setFid(Integer fid) {
		this.fid = fid;
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

	
	
	public double getRating() {
		return rating;
	}



	public void setRating(double rating) {
		this.rating = rating;
	}



	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	@Override
	public String toString() {
		return "ProductFeedDTO [fid=" + fid + ", userId=" + userId + ", productId=" + productId + ", feedback="
				+ feedback + "]";
	}
	
	

}
