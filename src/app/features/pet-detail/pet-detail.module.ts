import {NgModule} from "@angular/core";
import {PetDetailComponent} from "@app/features/pet-detail/pet-detail.component";
import {CommonModule} from "@angular/common";
import {PetDetailRoutingModule} from "@app/features/pet-detail/pet-detail-routing.module";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    PetDetailComponent
  ],
    imports: [
        CommonModule,
        PetDetailRoutingModule,
        CardModule
    ],
  exports: [
    PetDetailComponent
  ]
})

export class PetDetailModule {}
