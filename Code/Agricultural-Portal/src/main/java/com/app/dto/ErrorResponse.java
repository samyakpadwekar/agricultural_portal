package com.app.dto;

import java.time.LocalDateTime;

public class ErrorResponse {
	private String message;
	
	private LocalDateTime timeStamp;
	
	private String errDetails;
	public ErrorResponse() {
	}
	public ErrorResponse(String message, String errDetails) {
		super();
		this.message = message;
		this.timeStamp = LocalDateTime.now();
		this.errDetails = errDetails;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public LocalDateTime getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(LocalDateTime timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getErrDetails() {
		return errDetails;
	}
	public void setErrDetails(String errDetails) {
		this.errDetails = errDetails;
	}
	@Override
	public String toString() {
		return "ErrorResponse [message=" + message + ", timeStamp=" + timeStamp + "]";
	}
	
	
}
