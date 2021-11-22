import { environment } from 'src/environments/environment';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './auth.service';
import { EmailComponentComponent } from './email-component/email-component.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { ModificaUsuarioComponent } from './modules/usuarios/modifica-usuario/modifica-usuario.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocenteComponent } from './components/docente/docente.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { MateriasComponent } from './components/materias/materias.component';
import { HomepageEstudianteComponent } from './homepage-estudiante/homepage-estudiante.component';
import { DocentesComponent } from './components/lista-cosas/docentes/docentes.component';
import { EstudiantesComponent } from './components/lista-cosas/estudiantes/estudiantes.component';

//import { AngularFirestore } from '@angular/fire/firestore';
//import { AngularFireAuthModule } from "@angular/fire/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSjqQJSRHGyDAc1D1yAW3V0Q5WhhCAC2E",
  authDomain: "holamundo-c5321.firebaseapp.com",
  projectId: "holamundo-c5321",
  storageBucket: "holamundo-c5321.appspot.com",
  messagingSenderId: "4961436979",
  appId: "1:4961436979:web:d4a937a126e8e6f7ecaa46"
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginpageComponent,
    SignUppageComponent,
    EmailComponentComponent,
    ProfileComponentComponent,
    ModificaUsuarioComponent,
    ListaCosasComponent,
    NuevaCosaComponent,
    NavbarComponent,
    DocenteComponent,
    EstudianteComponent,
    MateriasComponent,
    HomepageEstudianteComponent,
    DocentesComponent,
    EstudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    EditorModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
