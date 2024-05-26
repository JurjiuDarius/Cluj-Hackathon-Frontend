import { Injectable } from '@angular/core';
import { IMenuItems } from '@app/core/models/menu-items.model';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  get getMenuItemsPatient(): Array<IMenuItems> {
    return [
      {
        icon: 'pi pi-shop',
        label: 'My Pets',
        route: '/dashboard',
      },
      {
        icon: 'pi pi-receipt',
        label: 'Treatment Plans',
        route: '/treatment-plans',
      },
      {
        icon: 'pi pi-clipboard',
        label: 'Appointments',
        route: '/appointments',
      },
      {
        icon: 'pi pi-clipboard',
        label: 'Doctors',
        route: '/all-doctors',
      },
    ];
  }
  get getMenuItemsDoctor(): Array<IMenuItems> {
    return [
      {
        icon: 'pi pi-shop',
        label: 'My Patients',
        route: '/patients',
      },
      {
        icon: 'pi pi-receipt',
        label: 'Appointments',
        route: '/appointments',
      },
    ];
  }
}
