import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/Person';
import { PersonajesService } from '../../servicio/personajes.service';
import {TranslateService} from '@ngx-translate/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorComponent } from 'src/app/paginator/paginator.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-busqueda-cursos',
  templateUrl: './busqueda-cursos.component.html',
  styleUrls: ['./busqueda-cursos.component.css']
})

export class BusquedaCursosComponent implements OnInit {

  // personajes: Person[] = [];

  characters: any;
  urlApi!: string;


  constructor(private route: ActivatedRoute, private personajesService: PersonajesService, private translate: TranslateService) {
    // this.personajes = personajesService.listadoPersonajes();
   }

    changeLanguageToSpanish(): void {
      this.translate.use('es');
    }

    changeLanguageToEnglish(): void {
      this.translate.use('en');
    }


    page_size = 20
    page_number = 1

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  filterPost = '';

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {

    this.personajesService.getCharacters().subscribe((response) => {
      this.characters = response;
    });

    this.personajesService.getCharacters().subscribe((characters) => console.log(characters));
  }

}

