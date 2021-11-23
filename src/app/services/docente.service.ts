import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private firestore: AngularFirestore) { }

  agregarDocente(cosa: any): Promise<any>{
    return this.firestore.collection('Docente').add(cosa);
  }

  getDocentes(): Observable<any>{
    return this.firestore.collection('cosas').snapshotChanges();
  }

  eliminarDocente(id: string): Promise<any>{
    return this.firestore.collection('cosas').doc(id).delete();
  }

  getDocente(id:string) : Observable<any>{
    return this.firestore.collection('cosas').doc(id).snapshotChanges();
  }

  editarDocente(id: string, data:any): Promise<any>{
    return this.firestore.collection('cosas').doc(id).update(data);
  }
}
