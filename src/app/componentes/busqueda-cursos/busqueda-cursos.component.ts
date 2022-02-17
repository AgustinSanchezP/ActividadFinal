import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/Person';
import { PersonajesService } from '../../servicio/personajes.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-busqueda-cursos',
  templateUrl: './busqueda-cursos.component.html',
  styleUrls: ['./busqueda-cursos.component.css']
})

export class BusquedaCursosComponent implements OnInit {

  personajes: Person[] = [];

  constructor(private route: ActivatedRoute, private personajesService: PersonajesService, private translate: TranslateService) {
    this.personajes = personajesService.listadoPersonajes(); }

    changeLanguageToSpanish(): void {
      this.translate.use('es');
    }

    changeLanguageToEnglish(): void {
      this.translate.use('en');
    }

  ngOnInit(): void {
  }

}
