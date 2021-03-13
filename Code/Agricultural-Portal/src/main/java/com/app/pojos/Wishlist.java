package com.app.pojos;

import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

	//Defining the table
	@Entity
	@Table(name = "wishlist",uniqueConstraints=
	        @UniqueConstraint(columnNames={"user_id", "pid"}))
	public class Wishlist {

	    //id column
	    //auto generated & auto incremented
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer id;

	    //user_id column
	    @Column(name = "user_id")
	    private @NotNull Integer userId;


	    //created_date column
	    @Column(name = "created_date")
	    private Date createdDate;

	    //Object of product class to store the product information
	    @OneToOne
	    @JoinColumn(name = "pid",insertable = false, updatable = false)
	    private Product product;

	    public Wishlist() {
	    }


	    public Wishlist(Integer userId, @NotBlank Product product) {
	        this.userId = userId;
	        this.product=product;
	        //storing the current data & time in created_date column
	        this.createdDate = new Date();
	    }
	 
	    //Setter & Getters

	    
	   
	    public Integer getUserId() {
	        return userId;
	    }

	  
	  
	    public void setUserId(Integer userId) {
	        this.userId = userId;
	    }

	    public void setCreatedDate(Timestamp createdDate) {
	        this.createdDate = createdDate;
	    }

	    public Date getCreatedDate() {
	        return createdDate;
	    }

	    public void setProduct(Product product) {
	        this.product = product;
	    }

	    public Product getProduct() {
	        return product;
	    }


		@Override
		public String toString() {
			return "Wishlist [userId=" + userId + ", productId=" + product + ", createdDate="
					+ createdDate + "]";
		}
	    
	    
	}

