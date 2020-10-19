
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientUser } from 'src/app/models/client-user';
import { UserService } from './../../../service/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userClient: ClientUser;
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUserClientAccount().subscribe((resp) => {
      this.userClient  = resp;
    })
  }

  getOutOfTheSystem() {
    this.router.navigate(['']);
    this.userService.logout();
  }
}
