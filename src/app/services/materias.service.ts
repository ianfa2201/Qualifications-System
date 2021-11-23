import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor(private firestore: AngularFirestore) {}

  agregarMateria(materia: any): Promise<any>{
    return this.firestore.collection('Materia').add(materia);
  }

  getMaterias(): Observable<any>{
    return this.firestore.collection('Materia').snapshotChanges();
  }

  eliminarMateria(id: string): Promise<any>{
    return this.firestore.collection('cosas').doc(id).delete();
  }

  getMateria(id:string) : Observable<any>{
    return this.firestore.collection('Materia').doc(id).snapshotChanges();
  }

  editarMateria(id: string, data:any): Promise<any>{
    return this.firestore.collection('Materia').doc(id).update(data);
  }
}
