import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  listaMaterias: Observable<any[]>;
  materias: any[] = [];

  constructor(firestore: AngularFirestore, private materiaService: MateriasService, private toastr: ToastrService) {
    this.listaMaterias = firestore.collection('Materia').valueChanges();
   }

  ngOnInit(): void {
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

  eliminarMaterias(id: string) {
    this.materiaService.eliminarMateria(id).then(() => {
      console.log('Materia eliminada con éxito');
      this.toastr.error('registro eliminado', 'Materia eliminada', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    });
  }
}
