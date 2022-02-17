import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  changeLanguageToSpanish(): void {
    this.translate.use('es');
  }

  changeLanguageToEnglish(): void {
    this.translate.use('en');
  }

}
