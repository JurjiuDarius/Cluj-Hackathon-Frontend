import {NgModule} from "@angular/core";
import {PetDetailComponent} from "@app/features/pet-detail/pet-detail.component";
import {CommonModule} from "@angular/common";
import {PetDetailRoutingModule} from "@app/features/pet-detail/pet-detail-routing.module";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {TabMenuModule} from "primeng/tabmenu";

@NgModule({
  declarations: [
    PetDetailComponent
  ],
  imports: [
    CommonModule,
    PetDetailRoutingModule,
    CardModule,
    DividerModule,
    ButtonModule,
    BadgeModule,
    TabMenuModule
  ],
  exports: [
    PetDetailComponent
  ]
})

export class PetDetailModule {}
