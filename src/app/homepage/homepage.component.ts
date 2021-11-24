import { CalificacionesService } from './../services/calificaciones.service';
import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private notaService : CalificacionesService ) { }

  notas: any[] = [];
  notasPendi: any[] = [];

  ngOnInit(): void {
    this.getNotas();
    this.getNotasPendi()
  }

  getNotas() {

    this.notaService.getNotas().subscribe(
      data => {
        this.notas = [];
        data.forEach((element: any) => {
          // console.log(element.payload.doc.id);
          // console.log(element.payload.doc.data());
          this.notas.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.notas);
      }
    );
  }

  getNotasPendi() {

    this.notaService.getNotasPendi().subscribe(
      data => {
        this.notasPendi = [];
        data.forEach((element: any) => {
          // console.log(element.payload.doc.id);
          // console.log(element.payload.doc.data());
          this.notas.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.notasPendi);
      }
    );
  }



}
