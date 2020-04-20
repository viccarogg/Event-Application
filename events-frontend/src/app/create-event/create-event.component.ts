import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  title = "";
  date = "";
  hours = "";
  minutes = "";
  location = "";

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent() {
    let toSave = {
      title : this.title,
      date : this.date,
      hours : this.hours,
      minutes : this.minutes,
      location : this.location
    };
    this.eventService.createEvent(toSave).subscribe(data => console.log(data));

    window.location.reload();
  }

}
