import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentsComponent } from './appointments.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
  },
  {
    path: 'new',
    component: AppointmentDetailsComponent,
  },
  {
    path: 'details/:id',
    component: AppointmentDetailsComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
