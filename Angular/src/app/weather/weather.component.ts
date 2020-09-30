import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city;
  data: any;

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("you entered"+ this.city);
    this.weather.checkWeather(this.city).subscribe(temp => {
      alert(JSON.stringify(temp));
      this.data = temp;
    })
    
  }

}
