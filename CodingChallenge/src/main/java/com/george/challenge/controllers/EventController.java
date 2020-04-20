package com.george.challenge.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.george.challenge.beans.EventObj;
import com.george.challenge.beans.Time;
import com.george.challenge.repository.EventRepository;
import com.george.challenge.services.TimeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class EventController {
	@Autowired
	private EventRepository eventRepository;
	
	@GetMapping("/time")
	public Time getTimeInWords(@RequestParam("hours") int hours, @RequestParam("mins") int mins) {
		return TimeService.timeInWords(hours, mins);
	}
	
	@GetMapping("/event")
	public List<EventObj> getAllEvents() {
		return eventRepository.findAll();
	}
	
	@PostMapping("/event")
	public EventObj createEvent(@RequestBody EventObj event) {
		return eventRepository.save(event);
	}
}
