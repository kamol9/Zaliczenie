import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './MyComponents/main/discover/discover.component';
import { HomeComponent } from './MyComponents/main/home/home.component';
import { WeatherinfoComponent } from './MyComponents/main/weatherinfo/weatherinfo.component';
import { RezerwacjaComponent } from './MyComponents/main/rezerwacja/rezerwacja.component';
import { CheckListComponent } from './MyComponents/main/check-list/check-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'weatherInfo', component: WeatherinfoComponent },
  { path: 'rezerwacja', component: RezerwacjaComponent },
  { path: 'check-list', component: CheckListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
