import { MateriasService } from 'src/app/services/materias.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-materia',
  templateUrl: './new-materia.component.html',
  styleUrls: ['./new-materia.component.css']
})
export class NewMateriaComponent implements OnInit {

  createMateria: FormGroup;
  enviado = false;
  id: string | null;
  titulo: string = 'Nuevo Materia';

  constructor(private fb: FormBuilder, private MateriaService: MateriasService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) {
    this.createMateria = this.fb.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      profesor: ['', Validators.required]
    }
    );
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarMateria() {
    this.enviado = true;

    if (this.createMateria.invalid) {
      return;
    }

    if (this.id === null) { /** NUevo Materia */
      const Materia: any = {
        nombre: this.createMateria.value.nombre,
        codigo: this.createMateria.value.codigo,
        profesor: this.createMateria.value.profesor
      }


      this.MateriaService.agregarMateria(Materia).then(() => {
        console.log("registro exitoso");
        this.toastr.success('El Materia se agregó con éxito a la BD.', 'Materia registrado', {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(["materias"]);
      }).catch(error => {
        console.log(error);
      });
    }// cierra IF
    else { /** EDITA Materia */
      const Materia: any = {
        nombre: this.createMateria.value.nombre,
        codigo: this.createMateria.value.codigo,
        profesor: this.createMateria.value.profesor,
      }
      this.MateriaService.editarMateria(this.id, Materia).then(() =>
        this.toastr.info('Materia modificada con exito.', 'Materia modificada', {
          positionClass: 'toast-bottom-right'
        })
      );
      this.router.navigate(['materias']);
    }
  }//cierra agregar Materia

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Materia';
      this.MateriaService.getMateria(this.id).subscribe(data => {
        this.createMateria.setValue({
          nombre: data.payload.data()['nombre'],
          codigo: data.payload.data()['codigo'],
          profesor: data.payload.data()['profesor'],
        });
      });
    } else {

    }
  }

}
