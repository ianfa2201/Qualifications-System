import { EstudianteService } from './../../../services/estudiante.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  listaEstudiantes: Observable<any[]>;
  docentes: any[] = [];

  constructor(firestore: AngularFirestore, private estudianteService: EstudianteService, private toastr: ToastrService) {
    this.listaEstudiantes = firestore.collection('Estudiante').valueChanges();
   }

  ngOnInit(): void {
  }

  getCosas() {

    this.estudianteService.getEstudiantes().subscribe(
      data => {
        this.docentes = [];
        data.forEach((element: any) => {
          // console.log(element.payload.doc.id);
          // console.log(element.payload.doc.data());
          this.docentes.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.docentes);
      }
    );
  }

  eliminarEstudiante(id: string) {
    this.estudianteService.eliminarEstudiante(id).then(() => {
      console.log('cosa eliminada con éxito');
      this.toastr.error('registro eliminado', 'Estudiante eliminada', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    });
  }
}
