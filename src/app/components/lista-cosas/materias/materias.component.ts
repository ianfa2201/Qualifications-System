import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  listaMaterias: Observable<any[]>;
  materias: any[] = [];

  constructor(firestore: AngularFirestore, private materiasService: MateriasService, private toastr: ToastrService) {
    this.listaMaterias = firestore.collection('Materia').valueChanges();
   }

  ngOnInit(): void {
    this.getMaterias();
  }

  getMaterias() {

    this.materiasService.getMaterias().subscribe(
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

  eliminarMateria(id: string) {
    this.materiasService.eliminarMateria(id).then(() => {
      console.log('Materia eliminada con éxito');
      this.toastr.error('registro eliminado', 'Materia eliminada', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    });
  }
}
