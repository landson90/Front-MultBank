import { HistoricService } from './../../service/historic/historic.service';
import { Component, OnInit } from '@angular/core';
import { Historic } from 'src/app/models/historic';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css']
})
export class HistoricComponent implements OnInit {

  historicList: Historic[] = [];
  rows: any[] = [];

  constructor(
    private historicService: HistoricService
  ) { }

  ngOnInit(): void {
    this.historicService.listHistoricClient(1).subscribe((resp) => this.historicList = resp)
  }

   /** Gets the total cost of all transactions. */
   getTotalCost() {
    //return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  groupColumns(photos: Historic[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }
}
