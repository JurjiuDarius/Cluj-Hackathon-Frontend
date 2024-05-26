import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorsComponent } from './doctors.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent,
  },
  {
    path: ':id',
    component: DoctorDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
