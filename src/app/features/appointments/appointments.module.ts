import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';

@NgModule({
  declarations: [AppointmentsComponent, AppointmentDetailsComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
  ],
  exports: [AppointmentsComponent, AppointmentDetailsComponent],
})
export class AppointmentsModule {}
