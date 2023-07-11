import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css']
})
export class ConsumoAPIComponent implements OnInit {
  informes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://localhost:7095/api/informe').subscribe(
      data => {
        this.informes = data;
        console.log(this.informes);
      },
      error => {
        console.log(error);
      }
    );
  }
}
