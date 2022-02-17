import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-body-principal',
  templateUrl: './body-principal.component.html',
  styleUrls: ['./body-principal.component.css']
})
export class BodyPrincipalComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
  }

}
