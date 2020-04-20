import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private baseUrl = 'http://localhost:9090/api'

  constructor(private http: HttpClient ) { }

  getEvents() : Observable<any> {
    return this.http.get(`${this.baseUrl}/event`);
  }

  createEvent(event: Object) : Observable<any> {
    return this.http.post(`${this.baseUrl}/event`, event);
  }

  getTimeInWords(hours:number, minutes:number) : Observable<any> {
    return this.http.get(`${this.baseUrl}/time?hours=${hours}&mins=${minutes}`)
  }
}
