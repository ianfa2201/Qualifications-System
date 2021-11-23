import { DocenteService } from './../../../services/docente.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  listaDocentes: Observable<any[]>;
  docentes: any[] = [];

  constructor(firestore: AngularFirestore, private docenteService: DocenteService, private toastr: ToastrService) {
    this.listaDocentes = firestore.collection('Docente').valueChanges();
   }

  ngOnInit(): void {
  }

  getCosas() {

    this.docenteService.getDocentes().subscribe(
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

  eliminarDocente(id: string) {
    this.docenteService.eliminarDocente(id).then(() => {
      console.log('cosa eliminada con éxito');
      this.toastr.error('registro eliminado', 'cosa eliminada', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    });
  }

}
