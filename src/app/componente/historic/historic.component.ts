import { HistoricService } from './../../service/historic/historic.service';
import { Component, OnInit } from '@angular/core';
import { Historic } from 'src/app/models/historic';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  historicList: Historic[] = [];
  rows: any[] = [];

  constructor(
    private historicService: HistoricService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.historicService.listHistoricClient(1).subscribe((resp) => this.historicList = resp)
  }



}
