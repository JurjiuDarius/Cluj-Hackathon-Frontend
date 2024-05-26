import {NgModule} from "@angular/core";
import {
  GeneralInformationComponent
} from "@app/features/pet-detail/components/general-information/general-information.component";
import {CommonModule} from "@angular/common";
import {
  GeneralInformationRoutingModule
} from "@app/features/pet-detail/components/general-information/general-information-routing.module";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    GeneralInformationComponent
  ],
  imports: [
    CommonModule,
    GeneralInformationRoutingModule,
    CardModule
  ],
  exports: [
    GeneralInformationComponent
  ]
})

export class GeneralInformationModule {}
