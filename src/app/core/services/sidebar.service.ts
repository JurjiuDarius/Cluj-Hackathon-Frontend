import { Injectable } from '@angular/core';
import {IMenuItems} from "@app/core/models/menu-items.model";

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  get getMenuItems(): Array<IMenuItems> {
    return [
      {
        icon: 'pi pi-shop',
        label: 'My Pets',
        route: '/dashboard',
      },
      {
        icon: 'pi pi-receipt',
        label: 'Treatment Plans',
        route: '/',
        disabled: true
      },
      {
        icon: 'pi pi-clipboard',
        label: 'Appointments',
        route: '/',
        disabled: true
      },
    ];
  }
}
