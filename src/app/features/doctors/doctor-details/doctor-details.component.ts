import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabmenuService } from '@app/core/services/tabMenu.service';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit {
  tabItems: Array<MenuItem> = [];
  routeId: string | null = '';
  currentTab = 0;
  private destroy$ = new Subject<boolean>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tabMenuService: TabmenuService
  ) {}

  ngOnInit(): void {
    this.routeId = this.route.snapshot.paramMap.get('id');

    this.initTabItems();
    this.detectTabChange();
  }

  backToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  private initTabItems(): void {
    this.tabItems = [
      {
        label: 'General information',
        command: () => {
          this.router.navigate([
            `/details/${this.routeId}/general-information`,
          ]);
        },
        routerLinkActiveOptions: 'active',
        id: 'general-information',
      },
      {
        label: 'Medical Information',
        command: () => {
          this.router.navigate([
            `/details/${this.routeId}/medical-information`,
          ]);
        },
        routerLinkActiveOptions: 'active',
        id: 'medical-information',
      },
      {
        label: 'Documents',
        command: () => {
          this.router.navigate([`/details/${this.routeId}/documents`]);
        },
        routerLinkActiveOptions: 'active',
        id: 'documents',
      },
    ];
    this.checkCurrentTab();
  }

  /**
   * Method to determine current tab
   * @private
   */
  private checkCurrentTab(): void {
    this.tabItems.forEach((tabItem: MenuItem, i: number): void => {
      if (this.router.url.includes(this.tabItems[i].id!)) {
        this.currentTab = i;
      }
    });
  }

  /**
   * Method to check current tab when the route was changed
   */
  private detectTabChange(): void {
    this.tabMenuService.orderTabChange$
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value: boolean): void => {
          if (!value) {
            return;
          }
          this.initTabItems();
          this.tabMenuService.checkOrderTabChange(false);
        },
      });
  }
}
