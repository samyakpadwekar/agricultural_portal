package com.app.pojos;

public class CityPin {
//Postal Code(Pin)	City	State	Country
	private String pin;
	private String city;
	private String state;
	private String country;
	
	public CityPin() {
	}

	public CityPin(String pin, String city, String state, String country) {
		super();
		this.pin = pin;
		this.city = city;
		this.state = state;
		this.country = country;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	
	
	
}
