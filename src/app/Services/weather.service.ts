import {
  HttpClient,
  HttpHandler,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private hppt: HttpClient) {}

  getWeatherData(cityName: string): Observable<WeatherData> {
    // return this.http.get<WeatherData>(
    //   environment.weatherApiBaseUrl + '/city/' + cityName,
    //   {
    //     headers: new HttpHeaders()
    //       .set(
    //         environment.XRapidAPIHostHeaderName,
    //         environment.XRapidAPIHostHeaderValue
    //       )
    //       .set(
    //         environment.XRapidAPIKeyHeaderName,
    //         environment.XRapidAPIKeyHeaderValue
    //       ),
    //   }
    // );
    const url = 'https://open-weather-api2.p.rapidapi.com/%7BPATH%7D';
    const options = { method: 'GET' };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
