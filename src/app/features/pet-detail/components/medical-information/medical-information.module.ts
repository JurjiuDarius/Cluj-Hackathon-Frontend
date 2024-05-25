import {NgModule} from "@angular/core";
import {
  MedicalInformationComponent
} from "@app/features/pet-detail/components/medical-information/medical-information.component";
import {CommonModule} from "@angular/common";
import {
  MedicalInformationRoutingModule
} from "@app/features/pet-detail/components/medical-information/medical-information-routing.module";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    MedicalInformationComponent
  ],
  imports: [
    CommonModule,
    MedicalInformationRoutingModule,
    CardModule
  ],
  exports: [
    MedicalInformationComponent
  ]
})

export class MedicalInformationModule {}
