package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="feedback",uniqueConstraints=
@UniqueConstraint(columnNames={"uid", "pid"}))
public class Feedback {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer fid;
	
	@Column(name = "uid")
    private @NotNull Integer userId;
	
	@Column(name = "pid")
    private @NotNull Integer productId;
	
	@Column(length=100)
	private String feedback;
	
	private double rating;
	
	@ManyToOne
	@JoinColumn(name = "uid", insertable = false, updatable = false)
	private User user;

	@ManyToOne
	@JoinColumn(name = "pid", referencedColumnName = "productId", insertable = false, updatable = false)
	private Product product;
	
	public Feedback() { System.out.println("in feedback ctr");}

	
	public Feedback(@NotNull Integer userId, @NotNull Integer productId,
			String feedback, double rating) {
		super();
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

	public void setProductId(Integer productId) {
		this.productId = productId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}


	@Override
	public String toString() {
		return "Feedback [fid=" + fid + ", userId=" + userId + ", productId=" + productId + ", feedback=" + feedback
				+ ", rating=" + rating + "]";
	}

	
	
	
}
