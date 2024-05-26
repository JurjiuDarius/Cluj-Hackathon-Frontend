import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { NewAppointmentModalModule } from '../components/modals/new-appointment-modal/new-appointment-modal.module';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [DoctorsComponent, DoctorDetailsComponent],
    imports: [
        CommonModule,
        DoctorsRoutingModule,
        CardModule,
        ButtonModule,
        ReactiveFormsModule,
        DropdownModule,
        CalendarModule,
        NewAppointmentModalModule,
        DividerModule,
        TabMenuModule,
        RippleModule,
    ],
  exports: [DoctorsComponent, DoctorDetailsComponent],
})
export class DoctorsModule {}
