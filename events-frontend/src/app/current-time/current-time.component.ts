import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {
  now: Date = new Date();
  timeInWords;

  constructor(private eventService : EventService) {
    setInterval(() => {
      this.now = new Date();
    }, 60000)
   }

  ngOnInit(): void {
    let hrs = this.now.getHours() > 12 ? this.now.getHours() - 12 : this.now.getHours();
    this.eventService.getTimeInWords(hrs, this.now.getMinutes()).subscribe(data => this.timeInWords = data.timeInWords);
    setInterval(() => {
      hrs = this.now.getHours() > 12 ? this.now.getHours() - 12 : this.now.getHours()
      fetch(`http://localhost:9090/api/time?hours=${hrs}&mins=${this.now.getMinutes()}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("time").innerText = data.timeInWords
      })
    }, 60000)
  }

}
