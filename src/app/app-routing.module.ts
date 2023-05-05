import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './MyComponents/main/discover/discover.component';
import { HomeComponent } from './MyComponents/main/home/home.component';
import { WeatherinfoComponent } from './MyComponents/main/weatherinfo/weatherinfo.component';
import { RezerwacjaComponent } from './MyComponents/main/rezerwacja/rezerwacja.component';
import { CheckListComponent } from './MyComponents/main/check-list/check-list.component';
import { WeatherapiComponent } from './MyComponents/main/weatherapi/weatherapi.component';
import { Weatherapiv2Component } from './MyComponents/main/weatherapiv2/weatherapiv2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'weatherInfo', component: WeatherinfoComponent },
  { path: 'rezerwacja', component: RezerwacjaComponent },
  { path: 'check-list', component: CheckListComponent },
  { path: 'weatherapi', component: WeatherapiComponent },
  { path: 'weatherapiv2', component: Weatherapiv2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
