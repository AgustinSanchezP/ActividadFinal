import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import  { HttpClient, HttpClientModule  } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MisPersonajesService } from 'src/app/servicio/mis-personajes.service';
import { PersonajesService } from 'src/app/servicio/personajes.service';


import { AppComponent } from './app.component';
import { MisCursosComponent } from './componentes/mis-cursos/mis-cursos.component';
import { BusquedaCursosComponent } from './componentes/busqueda-cursos/busqueda-cursos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
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
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [MisPersonajesService, PersonajesService],
  bootstrap: [BodyPrincipalComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
