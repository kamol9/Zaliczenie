import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './MyComponents/main/discover/discover.component';
import { HomeComponent } from './MyComponents/main/home/home.component';
import { WeatherinfoComponent } from './MyComponents/main/weatherinfo/weatherinfo.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'discover',component:DiscoverComponent},
  {path:'weatherInfo',component:WeatherinfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
