import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { NewAppointmentModalComponent } from './new-appointment-modal.component';

@NgModule({
  declarations: [NewAppointmentModalComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    ReactiveFormsModule,
    SharedModule,
    DialogModule,
    InputTextareaModule,
    CalendarModule,
    FormsModule,
  ],
  exports: [NewAppointmentModalComponent],
})
export class NewAppointmentModalModule {}
