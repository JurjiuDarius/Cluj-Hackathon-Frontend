import { Component, OnInit } from '@angular/core';
import {IMenuItems} from "@app/core/models/menu-items.model";
import {Router} from "@angular/router";
import {SidebarService} from "@app/core/services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  readonly sideNavMenu = this.sideBarService.getMenuItems;
  panelExpanded: boolean = false;
  activeRoute: IMenuItems | undefined;

  constructor(
    private router: Router,
    private sideBarService: SidebarService
  ) {
  }

  ngOnInit(): void {
    this.activeRoute = this.sideNavMenu.filter((t: IMenuItems) => this.router.url.includes(t.route) ? t : undefined)[0];
  }

  togglePanel(): void {
    this.panelExpanded = !this.panelExpanded;
  }
}
