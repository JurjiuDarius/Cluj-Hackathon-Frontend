import {NgModule} from "@angular/core";
import {
  GeneralInformationComponent
} from "@app/features/pet-detail/components/general-information/general-information.component";
import {CommonModule} from "@angular/common";
import {
  GeneralInformationRoutingModule
} from "@app/features/pet-detail/components/general-information/general-information-routing.module";

@NgModule({
  declarations: [
    GeneralInformationComponent
  ],
  imports: [
    CommonModule,
    GeneralInformationRoutingModule
  ],
  exports: [
    GeneralInformationComponent
  ]
})

export class GeneralInformationModule {}
