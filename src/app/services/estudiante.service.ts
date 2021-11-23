import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private firestore: AngularFirestore) {}

  agregarEstudiante(estudiante: any): Promise<any>{
    return this.firestore.collection('Estudiante').add(estudiante);
  }

  getEstudiantes(): Observable<any>{
    return this.firestore.collection('Estudiante').snapshotChanges();
  }

  eliminarEstudiante(id: string): Promise<any>{
    return this.firestore.collection('Estudiante').doc(id).delete();
  }

  getEstudiante(id:string) : Observable<any>{
    return this.firestore.collection('Estudiante').doc(id).snapshotChanges();
  }

  editarEstudiante(id: string, data:any): Promise<any>{
    return this.firestore.collection('Estudiante').doc(id).update(data);
  }
}
