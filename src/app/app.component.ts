import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Skinet';
  products: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://localhost:8080/api/Products?pageSize=50').subscribe((response: any) => {
      this.products = response.data;
    },error => {
      console.log(error)
    })
  }
}
