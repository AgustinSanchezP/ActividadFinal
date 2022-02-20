import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../models/Person';
import { HumanService } from '../../servicio/human.service';
import {TranslateService} from '@ngx-translate/core';
import { PageEvent } from '@angular/material/paginator';
import { PaginatorComponent } from 'src/app/paginator/paginator.component';


@Component({
  selector: 'app-p-human',
  templateUrl: './p-human.component.html',
  styleUrls: ['./p-human.component.css']
})
export class PHumanComponent implements OnInit {

  human: Person[] = [];

  constructor(private route: ActivatedRoute, private humanService: HumanService, private translate: TranslateService) {
    this.human = humanService.listadoHuman(); }

    changeLanguageToSpanish(): void {
      this.translate.use('es');
    }

    changeLanguageToEnglish(): void {
      this.translate.use('en');
    }

    ngOnInit(): void {
    }

    page_size = 10
    page_number = 1

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }

  filterPost = '';

}
