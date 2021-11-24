import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {



  constructor(private firestore: AngularFirestore) { }

  agregarNota(materia: any): Promise<any> {
    return this.firestore.collection('notas').add(materia);
  }

  getNotas(): Observable<any> {
    return this.firestore.collection('notas').snapshotChanges();
  }

  eliminarNota(id: string): Promise<any> {
    return this.firestore.collection('notas').doc(id).delete();
  }

  getNota(id: string): Observable<any> {
    return this.firestore.collection('notas').doc(id).snapshotChanges();
  }

  editarNota(id: string, data: any): Promise<any> {
    return this.firestore.collection('notas').doc(id).update(data);
  }


  getNotasPendi(): Observable<any> {
    return this.firestore.collection('pendi').snapshotChanges();
  }

  eliminarNotaPendi(id: string): Promise<any> {
    return this.firestore.collection('pendi').doc(id).delete();
  }

  getNotaPendi(id: string): Observable<any> {
    return this.firestore.collection('pendi').doc(id).snapshotChanges();
  }

  editarNotaPendi(id: string, data: any): Promise<any> {
    return this.firestore.collection('pendi').doc(id).update(data);
  }
}


