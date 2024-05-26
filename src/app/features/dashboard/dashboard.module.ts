import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {NewPetModalModule} from "@app/features/components/modals/new-pet-modal/new-pet-modal.module";
import {DividerModule} from "primeng/divider";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule,
    NewPetModalModule,
    DividerModule
  ],
  exports: [
    DashboardComponent
  ]
})

export class DashboardModule {}
