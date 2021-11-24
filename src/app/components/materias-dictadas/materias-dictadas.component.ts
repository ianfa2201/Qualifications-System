import { MateriasService } from './../../services/materias.service';
import { EstudianteService } from './../../services/estudiante.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-materias-dictadas',
  templateUrl: './materias-dictadas.component.html',
  styleUrls: ['./materias-dictadas.component.css']
})
export class MateriasDictadasComponent implements OnInit {

  estudiantes : any[] = []
  materias : any[] = []
  constructor(private estudianteService : EstudianteService, private materiaService : MateriasService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMaterias()
  }

  getMaterias() {

    this.materiaService.getMaterias().subscribe(
      data => {
        this.materias = [];
        data.forEach((element: any) => {
          // console.log(element.payload.doc.id);
          // console.log(element.payload.doc.data());
          this.materias.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.materias);
      }
    );
  }

  getEstudiantes() {

    this.estudianteService.getEstudiantes().subscribe(
      data => {
        this.estudiantes = [];
        data.forEach((element: any) => {
          // console.log(element.payload.doc.id);
          // console.log(element.payload.doc.data());
          this.estudiantes.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.estudiantes);
      }
    );
  }

}
