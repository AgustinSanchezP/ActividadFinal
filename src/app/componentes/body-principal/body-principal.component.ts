import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { UsersService } from '../../servicio/users.service';

@Component({
  selector: 'app-body-principal',
  templateUrl: './body-principal.component.html',
  styleUrls: ['./body-principal.component.css']
})
export class BodyPrincipalComponent implements OnInit {
  users: any;

  constructor(private translate: TranslateService, private usersService: UsersService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void{
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
