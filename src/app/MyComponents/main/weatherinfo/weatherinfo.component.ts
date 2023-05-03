import { Component, OnInit } from '@angular/core';
import { ModelWeather } from 'src/app/MyClasses/model-weather';
import { WeatherService } from 'src/app/MyServices/weather.service';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.css']
})
export class WeatherinfoComponent implements OnInit {

  cityName = ""

  modelWeather: ModelWeather;

  showInfoModule = false;

  constructor(private dataService: WeatherService) {
    this.modelWeather = new ModelWeather();

  }

  ngOnInit(): void {

  }

  getWeatherStats(city: string) {
    this.dataService.getJSON("https://api.weatherapi.com/v1/current.json?key=6fed8bb1bfd24dc090a115944231504&q=" + city + "&aqi=no")
      .subscribe((data) => {
        //console.log(data);

        this.modelWeather.cityName = data.location.name;
        this.modelWeather.temperature = data.current.temp_c.toString();
        this.modelWeather.icon = data.current.condition.icon;
        this.modelWeather.country = data.location.country;
        this.modelWeather.text = data.current.condition.text;
        this.showInfoModule = true;


      })
  }

  btnAcceptClick() {
    //alert(this.cityName);
    this.getWeatherStats(this.cityName);
    this.showInfoModule = false;

  }

}
