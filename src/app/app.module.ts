import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './MyComponents/main/main.component';
import { MyMaterialModule } from './mymaterial.module';
import { HomeComponent } from './MyComponents/main/home/home.component';
import { WeatherinfoComponent } from './MyComponents/main/weatherinfo/weatherinfo.component';
import { DiscoverComponent } from './MyComponents/main/discover/discover.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    DiscoverComponent,
    WeatherinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
