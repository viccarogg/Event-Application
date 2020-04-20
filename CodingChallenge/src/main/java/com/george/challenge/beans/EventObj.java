package com.george.challenge.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "event_table")
public class EventObj {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "evt_title")
	private String title;
	
	@Column(name = "evt_date")
	private String date;
	
	@Column(name = "evt_hours")
	private int hours;
	
	@Column(name = "evt_minutes")
	private int minutes;
	
	@Column(name = "evt_location")
	private String location;

	public EventObj() {}
	
	public EventObj(long id, String title, String date, int hours, int minutes, String location) {
		super();
		this.id = id;
		this.title = title;
		this.date = date;
		this.hours = hours;
		this.minutes = minutes;
		this.location = location;
	}

	@Override
	public String toString() {
		return "Event [id=" + id + ", title=" + title + ", date=" + date + ", location=" + location + "]";
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getHours() {
		return hours;
	}

	public void setHours(int hours) {
		this.hours = hours;
	}

	public int getMinutes() {
		return minutes;
	}

	public void setMinutes(int minutes) {
		this.minutes = minutes;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
}
