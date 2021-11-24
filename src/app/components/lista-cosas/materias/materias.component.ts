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
          console.log(element.payload.doc.data()['profesor']);
          let nombre = "";
          this.materias.push({
            id: element.payload.doc.id,
            /*profesor: this.materiasService.getDocente(element.payload.doc.data()['profesor']).subscribe(
              (datos: any) => {
                nombre = datos.payload.data()['nombre'];
                return nombre;
              }
            ),
            profe: nombre*/
            ...element.payload.doc.data()
          })
        });
        console.log(this.materias);
      }
    );
  }

  /*async getNombreProfesor(id: string): Promise<string> {

    const documento = this.materiasService.getDocente(id);
    const docFinal = await documento.get();
    return docFinal.data()
  }*/

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
