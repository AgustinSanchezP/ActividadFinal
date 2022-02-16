import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda-cursos',
  templateUrl: './busqueda-cursos.component.html',
  styleUrls: ['./busqueda-cursos.component.css']
})
export class BusquedaCursosComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
