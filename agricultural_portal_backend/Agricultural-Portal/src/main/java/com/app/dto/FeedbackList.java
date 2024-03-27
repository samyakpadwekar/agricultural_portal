package com.app.dto;

import java.util.List;

import com.app.pojos.Feedback;

public class FeedbackList {
	private List<Feedback> feedbackList;
	
	public FeedbackList() {
	}

	public FeedbackList(List<Feedback> feedbackList) {
		super();
		this.feedbackList = feedbackList;
	}

	public List<Feedback> getFeedbackList() {
		return feedbackList;
	}

	public void setFeedbackList(List<Feedback> feedbackList) {
		this.feedbackList = feedbackList;
	}

	@Override
	public String toString() {
		return "FeedbackList [feedbackList=" + feedbackList + "]";
	}
	
	
}
