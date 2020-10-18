import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientUser } from 'src/app/models/client-user';
import { MenuActionService } from 'src/app/service/menu/menu-action.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isActive = true;
  userClient: ClientUser;

  constructor(
    private menuActionService: MenuActionService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userService.getUserClientAccount().subscribe((resp) => this.userClient = resp);
  }

  activeMenuOrClose(isValue) {
    if(isValue === true) {

      this.menuActionService.setClose(isValue);
      this.isActive = false;
    } else {

      this.menuActionService.setClose(isValue);
      this.isActive = true;
    }
  }
  getOutOfTheSystem() {
    this.router.navigate(['']);
    this.userService.logout();
  }

}
