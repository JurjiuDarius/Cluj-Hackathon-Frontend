import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewPetModalModule } from '@app/features/components/modals/new-pet-modal/new-pet-modal.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import { NewAppointmentModalModule } from '../components/modals/new-appointment-modal/new-appointment-modal.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule,
    NewPetModalModule,
    NewAppointmentModalModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
