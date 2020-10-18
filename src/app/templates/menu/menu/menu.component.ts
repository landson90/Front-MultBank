import { MenuActionService } from './../../../service/menu/menu-action.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  openMenu: boolean = true;
  constructor(
    private userService: UserService,
    private router: Router,
    private menuActionService: MenuActionService
  ) { }

  ngOnInit(): void {
    this.menuActionService.getClose().subscribe((resp) => this.openMenu = resp)
  }



}
