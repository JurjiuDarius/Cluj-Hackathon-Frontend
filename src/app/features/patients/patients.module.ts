import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PetDetailRoutingModule } from '@app/features/pet-detail/pet-detail-routing.module';
import { CardModule } from 'primeng/card';
import { PatientsComponent } from './patients.component';

@NgModule({
  declarations: [PatientsComponent],
  imports: [CommonModule, PetDetailRoutingModule, CardModule],
  exports: [PatientsComponent],
})
export class PatientsModule {}
