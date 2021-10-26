import { CosasService } from './../../services/cosas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-cosa',
  templateUrl: './nueva-cosa.component.html',
  styleUrls: ['./nueva-cosa.component.css']
})
export class NuevaCosaComponent implements OnInit {


  createCosa: FormGroup;
  enviado = false;


  constructor(private fb: FormBuilder, private cosaService: CosasService) {
    this.createCosa = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required]
    }
    );
  }

  ngOnInit(): void {
  }

  agregarCosa() {
    this.enviado = true;

    if (this.createCosa.invalid) {
      return;
    }
    const cosa: any = {
      nombre: this.createCosa.value.nombre,
      cantidad: this.createCosa.value.cantidad
    }


    this.cosaService.agregarCosa(cosa).then(() => {
      console.log("registro exitoso");
    }).catch(error => {
      console.log(error);
    })

  }

}
