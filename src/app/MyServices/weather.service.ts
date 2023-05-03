import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIWeather } from '../MyClasses/api-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  public getJSON(url: string): Observable<APIWeather> {
    return this.http.get<APIWeather>(url);
  }
}
