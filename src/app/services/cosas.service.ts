import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CosasService {

  constructor(private firestore: AngularFirestore) { }

  agregarCosa(cosa: any): Promise<any>{
    return this.firestore.collection('cosas').add(cosa);
  }

  getCosas(): Observable<any>{
    return this.firestore.collection('cosas').snapshotChanges();
  }

  eliminarCosa(id: string): Promise<any>{
    return this.firestore.collection('cosas').doc(id).delete();
  }

  getCosa(id:string) : Observable<any>{
    return this.firestore.collection('cosas').doc(id).snapshotChanges();
  }

  editarCosa(id: string, data:any): Promise<any>{
    return this.firestore.collection('cosas').doc(id).update(data);
  }
}
