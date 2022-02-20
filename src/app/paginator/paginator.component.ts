import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/Person';
import { PersonajesService } from '../servicio/personajes.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor(
    private personajesService: PersonajesService
    ) {

    this.personajes = personajesService.listadoPersonajes();
  }



  ngOnInit(): void {
  }

  personajes: Person[] = [];

  @Input("page_size") page_size: any;
  @Input("page_number") page_number: any;

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

}
