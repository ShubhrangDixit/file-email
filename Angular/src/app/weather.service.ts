import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  checkWeather(city: string): Observable<any>{
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=138b91f7502c917df454a94449df5c18";
    return this.http.get(url);
  }
}
