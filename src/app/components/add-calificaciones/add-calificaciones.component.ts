import { CalificacionesService } from './../../services/calificaciones.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriasService } from 'src/app/services/materias.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-calificaciones',
  templateUrl: './add-calificaciones.component.html',
  styleUrls: ['./add-calificaciones.component.css']
})
export class AddCalificacionesComponent implements OnInit {

 createNota: FormGroup;
  enviado = false;
  id: string | null;
  titulo: string = 'Nueva Nota';
  estudiantes: any[] = [];
  materias: any[] = [];

  constructor(private fb: FormBuilder, private notaService: CalificacionesService,private materiasService: MateriasService, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute , private estudianteService: EstudianteService) {
    this.createNota = this.fb.group({
      estudiante: ['', Validators.required],
      nota: ['', Validators.required],
      materia: ['', Validators.required]
    }
    );
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
    this.getEstudiantes();
    this.getMaterias()
  }

  agregarMateria() {
    this.enviado = true;

    if (this.createNota.invalid) {
      return;
    }

    if (this.id === null) { /** NUevo Materia */
      const nota: any = {
        estudiante: this.createNota.value.estudiante,
        nota: this.createNota.value.nota,
        materia: this.createNota.value.materia
      }


      this.notaService.agregarNota(nota).then(() => {
        console.log("registro exitoso");
        this.toastr.success('La calificacion se agregó con éxito a la BD.', 'Calificación registrada', {
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(["dictadas"]);
      }).catch(error => {
        console.log(error);
      });
    }// cierra IF
    else { /** EDITA Materia */
      const nota: any = {

        estudiante: this.createNota.value.estudiante,
        nota: this.createNota.value.nota,
        materia: this.createNota.value.materia,
      }
      this.notaService.editarNota(this.id, nota).then(() =>
        this.toastr.info('Materia modificada con exito.', 'Materia modificada', {
          positionClass: 'toast-bottom-right'
        })
      );
      this.router.navigate(['dictadas']);
    }
  }//cierra agregar Materia

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar nota';
      this.notaService.getNota(this.id).subscribe(data => {
        this.createNota.setValue({
          estudiante: data.payload.data()['estudiante'],
          nota: data.payload.data()['codigo'],
          materia: data.payload.data()['materia'],
        });
      });
    } else {

    }
  }

  getEstudiantes() {

    this.estudianteService.getEstudiantes().subscribe(
      data => {
        this.estudiantes= [];
        data.forEach((element: any) => {
          // console.log(element.payload.doc.id);
          // console.log(element.payload.doc.data());
          this.estudiantes.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        });
        console.log(this.estudiantes);
      }
    );
  }

  getMaterias() {

    this.materiasService.getMaterias().subscribe(
      data => {
        this.materias = [];
        data.forEach((element: any) => {
          // console.log(element.payload.doc.id);
          console.log(element.payload.doc.data()['profesor']);
          let nombre = "";
          this.materias.push({
            id: element.payload.doc.id,
            /*profesor: this.materiasService.getDocente(element.payload.doc.data()['profesor']).subscribe(
              (datos: any) => {
                nombre = datos.payload.data()['nombre'];
                return nombre;
              }
            ),
            profe: nombre*/
            ...element.payload.doc.data()
          })
        });
        console.log(this.materias);
      }
    );
  }

}
