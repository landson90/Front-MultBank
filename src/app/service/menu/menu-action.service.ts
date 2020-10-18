import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuActionService {

  private activeMenu = true;
  isActive = new BehaviorSubject<boolean>(true);

  constructor() { }

  setClose(isActive: boolean) {
    this.activeMenu = isActive;
    this.isActive.next(this.activeMenu);
  }
  setOpen(isActive: boolean) {
    this.activeMenu = isActive;
    this.isActive.next(this.activeMenu);
  }
  getClose() {
    return this.isActive.asObservable();
  }
}
