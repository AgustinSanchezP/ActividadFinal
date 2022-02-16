import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MisCursosComponent } from './componentes/mis-cursos/mis-cursos.component';
import { BusquedaCursosComponent } from './componentes/busqueda-cursos/busqueda-cursos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { BodyPrincipalComponent } from './componentes/body-principal/body-principal.component';


const routes: Routes = [
  {path: '', component: MisCursosComponent},
  {path: 'misCursos', component: MisCursosComponent},
  {path: 'busquedaCursos', component: BusquedaCursosComponent},
  {path: '**', component: MisCursosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MisCursosComponent,
    BusquedaCursosComponent,
    HeaderComponent,
    FooterComponent,
    BodyPrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [BodyPrincipalComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
