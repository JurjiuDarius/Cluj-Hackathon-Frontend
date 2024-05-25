import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  MedicalInformationComponent
} from "@app/features/pet-detail/components/medical-information/medical-information.component";

const routes: Routes = [
  {
    path: '',
    component: MedicalInformationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MedicalInformationRoutingModule {
}
