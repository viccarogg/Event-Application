import { Component, OnInit, Pipe } from '@angular/core';
import { EventObj } from '../models/event';
import { EventService } from '../event.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: EventObj[] = [];
  filteredEvents=this.events;
  filter = "";

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data) => {
      data.forEach(element => {
        this.eventService.getTimeInWords(Number(element.hours), Number(element.minutes)).subscribe(json => {
          this.events.push({
            title: String(element.title),
            date: String(element.date),
            time: json.timeInWords,
            location: String(element.location)
          });
        });

      });
    })

  }

  filterTable() {
    console.log('filter changed: ' + this.filter)
    let today = new Date();
    switch(this.filter) {
      case "":
        this.filteredEvents = this.events;
        break;
      case "t":
        this.filteredEvents = this.events.filter(evt => {
          return Number(evt.date.split("-")[2]) == today.getDate();
        });
        break;
      case "w":
        this.filteredEvents = this.events.filter(evt => {
          return Number(evt.date.split("-")[2]) - 7 <= today.getDate() || today.getDate() <= Number(evt.date.split("-")[2]) + 7;
        });
        break;
      case "m":
        this.filteredEvents = this.events.filter(evt => {
          return Number(evt.date.split("-")[1]) == today.getMonth()+1;
        });
        break;
      case "y":
        this.filteredEvents = this.events.filter(evt => {
          return Number(evt.date.split("-")[0]) == today.getFullYear();
        });
        break;
      case "p":
        this.filteredEvents = this.events.filter(evt => {
          let dateParts = evt.date.split("-");
          return new Date(Number(dateParts[0]), Number(dateParts[1]), Number(dateParts[2])) <= today;
        });
        break;
      case "f":
        this.filteredEvents = this.events.filter(evt => {
          let dateParts = evt.date.split("-");
          return new Date(Number(dateParts[0]), Number(dateParts[1]), Number(dateParts[2])) >= today;
        });
        break;
      
    }
  }

}
