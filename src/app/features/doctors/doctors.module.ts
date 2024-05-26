import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { NewAppointmentModalModule } from '../components/modals/new-appointment-modal/new-appointment-modal.module';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';

@NgModule({
  declarations: [DoctorsComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    NewAppointmentModalModule,
  ],
  exports: [DoctorsComponent],
})
export class DoctorsModule {}
