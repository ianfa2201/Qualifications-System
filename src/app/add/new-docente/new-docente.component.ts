import { DocenteService } from './../../services/docente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-docente',
  templateUrl: './new-docente.component.html',
  styleUrls: ['./new-docente.component.css']
})
export class NewDocenteComponent implements OnInit {

  createDocente: FormGroup;
  enviado = false;
  id: string | null;
  titulo: string = 'Nuevo docente';

  constructor(private fb: FormBuilder, private docenteService: DocenteService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.createDocente = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required]
    }
    );
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarDocente() {
    this.enviado = true;

    if (this.createDocente.invalid) {
      return;
    }

    if (this.id === null) { /** NUevo Docente */
      const docente: any = {
        nombre: this.createDocente.value.nombre,
        codigo: this.createDocente.value.codigo
      }


      this.docenteService.agregarDocente(docente).then(() => {
        console.log("registro exitoso");
        this.toastr.success('El docente se agregó con éxito a la BD.', 'Docente registrado', {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(["docentes"]);
      }).catch(error => {
        console.log(error);
      });
    }// cierra IF
    else { /** EDITA DOCENTE */
      const docente: any = {
        nombre: this.createDocente.value.nombre,
        codigo: this.createDocente.value.codigo,
      }
      this.docenteService.editarDocente(this.id, docente).then(() =>
        this.toastr.info('cosa modificada con exito.', 'cosa modificada', {
          positionClass: 'toast-bottom-right'
        })
      );
      this.router.navigate(['docentes']);
    }
  }//cierra agregar docente

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar docente';
      this.docenteService.getDocente(this.id).subscribe(data => {
        this.createDocente.setValue({
          nombre: data.payload.data()['nombre'],
          codigo: data.payload.data()['codigo']
        });
      });
    } else {

    }
  }


}
