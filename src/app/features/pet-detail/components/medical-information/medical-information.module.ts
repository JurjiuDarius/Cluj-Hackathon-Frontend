import {NgModule} from "@angular/core";
import {
  MedicalInformationComponent
} from "@app/features/pet-detail/components/medical-information/medical-information.component";
import {CommonModule} from "@angular/common";
import {
  MedicalInformationRoutingModule
} from "@app/features/pet-detail/components/medical-information/medical-information-routing.module";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {VeterinaryVisitModule} from "@app/features/components/modals/veterinary-visit/veterinary-visit.module";

@NgModule({
  declarations: [
    MedicalInformationComponent
  ],
  imports: [
    CommonModule,
    MedicalInformationRoutingModule,
    CardModule,
    ButtonModule,
    BadgeModule,
    VeterinaryVisitModule
  ],
  exports: [
    MedicalInformationComponent
  ]
})

export class MedicalInformationModule {}
