import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weatherapi',
  templateUrl: './weatherapi.component.html',
  styleUrls: ['./weatherapi.component.css'],
})
export class WeatherapiComponent {
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMethode();
    this.postMethod();
  }

  public getMethode() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        console.log(data);
        this.getJsonValue = data;
      });
  }

  public postMethod() {
    const header = new HttpHeaders({
      contentType: 'application/json',
    });

    let body = {
      title: 'Quick',
      body: 'Code',
      userId: 1,
    };
    this.http
      .post('https://jsonplaceholder.typicode.com/posts', body, {
        headers: header,
      })
      .subscribe((data) => {
        console.log(data);
        this.postJsonValue = data;
      });
  }
}
