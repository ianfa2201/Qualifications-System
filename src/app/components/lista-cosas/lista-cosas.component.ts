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

  constructor(firestore: AngularFirestore) {
    this.listaCosas = firestore.collection('cosas').valueChanges();
  }

  ngOnInit(): void {
  }

}
