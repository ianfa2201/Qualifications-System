import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CosasService } from './../../services/cosas.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-cosas',
  templateUrl: './lista-cosas.component.html',
  styleUrls: ['./lista-cosas.component.css']
})
export class ListaCosasComponent implements OnInit {

  listaCosas: Observable<any[]>;
  cosas: any[] = [];

  constructor(firestore: AngularFirestore, private _cosaService: CosasService, private toastr: ToastrService) {
    this.listaCosas = firestore.collection('cosas').valueChanges();
  }

  ngOnInit(): void {
    this.getCosas();
  }

  getCosas() {

    this._cosaService.getCosas().subscribe(
      data => {
        this.cosas = [];
        data.forEach((element: any) => {
          // console.log(element.payload.doc.id);
          // console.log(element.payload.doc.data());
          this.cosas.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.cosas);
      }
    );
  }

  eliminarCosa(id: string) {
    this._cosaService.eliminarCosa(id).then(() => {
      console.log('cosa eliminada con éxito');
      this.toastr.error('registro eliminado', 'cosa eliminada', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    });
  }
}
