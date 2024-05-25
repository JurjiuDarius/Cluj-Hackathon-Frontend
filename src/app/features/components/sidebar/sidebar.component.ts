import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItems } from '@app/core/models/menu-items.model';
import { SidebarService } from '@app/core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sideNavMenu = this.sideBarService.getMenuItemsPatient;
  panelExpanded: boolean = false;
  activeRoute: IMenuItems | undefined;

  constructor(private router: Router, private sideBarService: SidebarService) {}

  ngOnInit(): void {
    let role = localStorage.getItem('currentRole') || 'owner';
    if (role === 'owner') {
      this.sideNavMenu = this.sideBarService.getMenuItemsPatient;
    } else {
      this.sideNavMenu = this.sideBarService.getMenuItemsDoctor;
    }
    this.activeRoute = this.sideNavMenu.filter((t: IMenuItems) =>
      this.router.url.includes(t.route) ? t : undefined
    )[0];
  }

  togglePanel(): void {
    this.panelExpanded = !this.panelExpanded;
  }
}
