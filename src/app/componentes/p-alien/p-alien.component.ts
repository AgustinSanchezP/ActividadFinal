import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/Person';
import { AlienService } from '../../servicio/alien.service';
import {TranslateService} from '@ngx-translate/core';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-p-alien',
  templateUrl: './p-alien.component.html',
  styleUrls: ['./p-alien.component.css']
})
export class PAlienComponent implements OnInit {

  alien: Person[] = [];

  constructor(private route: ActivatedRoute, private alienService: AlienService, private translate: TranslateService) {
    this.alien = alienService.listadoAlien(); }

    changeLanguageToSpanish(): void {
      this.translate.use('es');
    }

    changeLanguageToEnglish(): void {
      this.translate.use('en');
    }

    ngOnInit(): void {
    }

    page_size = 5
    page_number = 1

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  filterPost = '';
}
