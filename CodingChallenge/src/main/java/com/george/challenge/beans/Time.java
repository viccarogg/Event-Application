package com.george.challenge.beans;

public class Time {

	private String timeInWords;

	public Time() {
	}
	
	public Time(String timeInWords) {
		super();
		this.timeInWords = timeInWords;
	}

	public String getTimeInWords() {
		return timeInWords;
	}

	public void setTimeInWords(String timeInWords) {
		this.timeInWords = timeInWords;
	}
}
