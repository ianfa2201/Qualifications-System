import { CosasService } from './../../services/cosas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nueva-cosa',
  templateUrl: './nueva-cosa.component.html',
  styleUrls: ['./nueva-cosa.component.css']
})
export class NuevaCosaComponent implements OnInit {


  createCosa: FormGroup;
  enviado = false;
  id: string | null;
  titulo: string = 'Nueva cosa';

  constructor(private fb: FormBuilder, private cosaService: CosasService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.createCosa = this.fb.group({
      nombre: ['', Validators.required],
      cantidad: ['', Validators.required]
    }
    );
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCosa() {
    this.enviado = true;

    if (this.createCosa.invalid) {
      return;
    }

    if (this.id === null) { /** NUEVA COSA */
      const cosa: any = {
        nombre: this.createCosa.value.nombre,
        cantidad: this.createCosa.value.cantidad
      }


      this.cosaService.agregarCosa(cosa).then(() => {
        console.log("registro exitoso");
        this.toastr.success('La cosa se agregó con éxito a la BD.', 'Cosa registrada', {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(["lista-cosas"]);
      }).catch(error => {
        console.log(error);
      });
    }// cierra IF
    else { /** EDITA COSA */
      const cosa: any = {
        nombre: this.createCosa.value.nombre,
        cantidad: this.createCosa.value.cantidad
      }
      this.cosaService.editarCosa(this.id, cosa).then(() =>
      this.toastr.info('cosa modificada con exito.', 'cosa modificada', {
        positionClass: 'toast-bottom-right'
      })
      );
      this.router.navigate(['lista-cosas']);
    }
  }//cierra agregar cosa

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar cosa';
      this.cosaService.getCosa(this.id).subscribe(data => {
        this.createCosa.setValue({
          nombre: data.payload.data()['nombre'],
          cantidad: data.payload.data()['cantidad']
        });
      });
    } else {

    }
  }

}
