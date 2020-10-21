import { HistoricService } from './../../service/historic/historic.service';
import { Component, OnInit } from '@angular/core';
import { Historic } from 'src/app/models/historic';
import { UserService } from 'src/app/service/user/user.service';
import { PageItem } from './../../models/historic';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  historicList: Historic[] = [];
  clientId: number;
  page: PageItem;
  pageNow: number;
  totalNumberOfPages: number;
  displayPageNumber = 1;

  constructor(
    private historicService: HistoricService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.constructorDisplay();
  }

  constructorDisplay() {
    this.userService.getUserClientAccount().subscribe((resp) => {
      this.clientId = resp.clientId;
      this.historicZeroPage(this.clientId, 0);
    });
  }


  private historicZeroPage(clientID: number, numberPage: number) {
    this.historicService.listHistoricClient(clientID, numberPage).subscribe((resp) => {
      console.log(resp);
      this.page = resp;
      this.historicList = this.page.content;
      this.pageNow = this.page.number;
      this.totalNumberOfPages = this.page.totalPages;

    })
  }

  previousPage(currentPage: number) {
    this.displayPageNumber -= 1;
    let goToPage = currentPage - 1;
    if(goToPage < 0) {
      goToPage += 1 ;
      this.displayPageNumber += 1;
      return;
    }
    this.historicZeroPage(this.clientId, goToPage);
  }

  nextPage(currentPage: number) {
    this.displayPageNumber += 1;
    let goToPage = currentPage + 1;
    if(this.totalNumberOfPages === goToPage) {
      goToPage -= 1 ;
      this.displayPageNumber -= 1;
      return;
    }
    console.log(goToPage, 1);
    this.historicZeroPage(this.clientId, goToPage);

  }
}
