import { NewMateriaComponent } from './add/new-materia/new-materia.component';
import { NewEstudianteComponent } from './add/new-estudiante/new-estudiante.component';
import { NewDocenteComponent } from './add/new-docente/new-docente.component';
import { DocentesComponent } from './components/lista-cosas/docentes/docentes.component';
import { EstudiantesComponent } from './components/lista-cosas/estudiantes/estudiantes.component';
import { DocenteComponent } from './components/docente/docente.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { ModificaUsuarioComponent } from './modules/usuarios/modifica-usuario/modifica-usuario.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponentComponent } from './email-component/email-component.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { MateriasComponent } from './components/lista-cosas/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'email-login', component: EmailComponentComponent },
  { path: 'signup', component: SignUppageComponent },
  { path: 'profile', component: ProfileComponentComponent },
  { path: 'lista-cosas', component: ListaCosasComponent},
  { path: 'nav-bar', component: NavbarComponent},
  { path: 'nueva-cosa', component: NuevaCosaComponent},
  { path: 'edita-cosa/:id', component: NuevaCosaComponent},
  { path: 'home', component: HomepageComponent},
  { path: 'estudiante', component: EstudianteComponent},
  { path: 'docente', component: DocenteComponent},
  { path: 'materia', component: MateriaComponent},
  { path: 'estudiantes', component: EstudiantesComponent},
  { path: 'docentes', component: DocentesComponent},
  { path: 'materias', component: MateriasComponent},
  { path: 'nuevo-docente', component: NewDocenteComponent},
  { path: 'nuevo-estudiante', component: NewEstudianteComponent},
  { path: 'nueva-materia', component: NewMateriaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
