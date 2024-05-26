import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@app/features/components/sidebar/sidebar.module';
import { DialogModule } from 'primeng/dialog';
import { AppointmentsModule } from './appointments/appointments.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FeaturesRoutingModule,
    AppointmentsModule,
    SidebarModule,
    DialogModule,
  ],
  exports: [FeaturesComponent],
})
export class FeaturesModule {}
