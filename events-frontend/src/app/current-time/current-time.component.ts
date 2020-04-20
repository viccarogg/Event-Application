import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {
  now: Date = new Date();
  timeInWords = "";

  constructor(private eventService : EventService) {
    setInterval(() => {
      this.now = new Date();
    }, 60000)
   }

  ngOnInit(): void {
    this.eventService.getTimeInWords(this.now.getHours() > 12 ? this.now.getHours() - 12 : this.now.getHours(), this.now.getMinutes()).subscribe(data => this.timeInWords = data);
  }

    updateTime() {
      this.eventService.getTimeInWords(this.now.getHours(), this.now.getMinutes()).subscribe(data => this.timeInWords = data);
    }
}
