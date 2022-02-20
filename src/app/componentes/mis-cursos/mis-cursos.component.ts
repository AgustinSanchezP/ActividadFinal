import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/Person';
import { MisPersonajesService } from '../../servicio/mis-personajes.service';
import {TranslateService} from '@ngx-translate/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {

  misPersonajes: Person[] = [];

  constructor(private route: ActivatedRoute, private misPersonajesService: MisPersonajesService, private translate: TranslateService) {
    this.misPersonajes = misPersonajesService.listadoMisPersonajes(); }

  ngOnInit(): void {
  }

  changeLanguageToSpanish(): void {
    this.translate.use('es');
  }

  changeLanguageToEnglish(): void {
    this.translate.use('en');
  }

  page_size = 4
  page_number = 1

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
}
