import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@app/features/components/sidebar/sidebar.module';
import { DialogModule } from 'primeng/dialog';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [FeaturesComponent, PatientsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FeaturesRoutingModule,
    SidebarModule,
    DialogModule,
  ],
  exports: [FeaturesComponent],
})
export class FeaturesModule {}
