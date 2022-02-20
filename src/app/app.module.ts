import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import  { HttpClient, HttpClientModule  } from '@angular/common/http';

import {MatPaginatorModule} from '@angular/material/paginator';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MisPersonajesService } from 'src/app/servicio/mis-personajes.service';
import { PersonajesService } from 'src/app/servicio/personajes.service';
import { HumanService } from 'src/app/servicio/human.service';
import { AlienService } from 'src/app/servicio/alien.service';


import { AppComponent } from './app.component';
import { MisCursosComponent } from './componentes/mis-cursos/mis-cursos.component';
import { BusquedaCursosComponent } from './componentes/busqueda-cursos/busqueda-cursos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyPrincipalComponent } from './componentes/body-principal/body-principal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatePipe } from './pipes/paginate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PAlienComponent } from './componentes/p-alien/p-alien.component';
import { PHumanComponent } from './componentes/p-human/p-human.component';


const routes: Routes = [
  {path: '', component: MisCursosComponent},
  {path: 'alien', component: PAlienComponent},
  {path: 'human', component: PHumanComponent},
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
    BodyPrincipalComponent,
    PaginatePipe,
    PaginatorComponent,
    FilterPipe,
    PAlienComponent,
    PHumanComponent
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
    }),
    MatPaginatorModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [MisPersonajesService, PersonajesService, HumanService, AlienService],
  bootstrap: [BodyPrincipalComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
