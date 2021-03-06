import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "http://localhost:3000/api/event/events";
  private _specialEventsUrl = "http://localhost:3000/api/event/special";


  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    console.log("getEvents");
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents(): Observable<any> {
    return this.http.get<any>(this._specialEventsUrl)
  }


}
