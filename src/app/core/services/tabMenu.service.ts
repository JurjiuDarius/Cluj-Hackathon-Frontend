import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TabmenuService {
  private displayTabmenuSubject = new BehaviorSubject<boolean>(false);
  displayTabmenu$ = this.displayTabmenuSubject.asObservable();

  private orderTabChange = new BehaviorSubject<boolean>(false);
  orderTabChange$ = this.orderTabChange.asObservable();

  setDisplayTabmenu(display: boolean): void {
    this.displayTabmenuSubject.next(display);
  }

  checkOrderTabChange(value: boolean): void {
    this.orderTabChange.next(value);
  }
}
