import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {

  constructor(private firestore: AngularFirestore) {

   }

   agregarCalificacion(nota: any){
      this.firestore.collection.collectio 
   }
}
