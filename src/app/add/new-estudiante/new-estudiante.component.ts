import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-new-estudiante',
  templateUrl: './new-estudiante.component.html',
  styleUrls: ['./new-estudiante.component.css']
})
export class NewEstudianteComponent implements OnInit {

  createEstudiante: FormGroup;
  enviado = false;
  id: string | null;
  titulo: string = 'Nuevo Estudiante';

  constructor(private fb: FormBuilder, private estudianteService: EstudianteService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.createEstudiante = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required]
    }
    );
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEstudiante() {
    this.enviado = true;

    if (this.createEstudiante.invalid) {
      return;
    }

    if (this.id === null) { /** NUevo Estudiante */
      const Estudiante: any = {
        nombre: this.createEstudiante.value.nombre,
        codigo: this.createEstudiante.value.codigo
      }


      this.estudianteService.agregarEstudiante(Estudiante).then(() => {
        console.log("registro exitoso");
        this.toastr.success('El Estudiante se agregó con éxito a la BD.', 'Estudiante registrado', {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(["estudiantes"]);
      }).catch(error => {
        console.log(error);
      });
    }// cierra IF
    else { /** EDITA Estudiante */
      const Estudiante: any = {
        nombre: this.createEstudiante.value.nombre,
        codigo: this.createEstudiante.value.codigo,
      }
      this.estudianteService.editarEstudiante(this.id, Estudiante).then(() =>
        this.toastr.info('Estudiante modificado con exito.', 'Estudiante modificada', {
          positionClass: 'toast-bottom-right'
        })
      );
      this.router.navigate(['estudiantes']);
    }
  }//cierra agregar Estudiante

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Estudiante';
      this.estudianteService.getEstudiante(this.id).subscribe(data => {
        this.createEstudiante.setValue({
          nombre: data.payload.data()['nombre'],
          codigo: data.payload.data()['codigo']
        });
      });
    } else {

    }
  }

}

