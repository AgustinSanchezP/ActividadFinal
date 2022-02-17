import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/Person';
import { MisPersonajesService } from '../../servicio/mis-personajes.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {

  misPersonajes: Person[] = [];

  constructor(private route: ActivatedRoute, private mispersonajesService: MisPersonajesService, private translate: TranslateService) {
    this.misPersonajes = mispersonajesService.listadoMisPersonajes(); }

  ngOnInit(): void {
  }

  changeLanguageToSpanish(): void {
    this.translate.use('es');
  }

  changeLanguageToEnglish(): void {
    this.translate.use('en');
  }
}
