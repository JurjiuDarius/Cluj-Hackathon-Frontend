import {NgModule} from "@angular/core";
import {FeaturesComponent} from "./features.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FeaturesRoutingModule} from "./features-routing.module";
import {SidebarModule} from "@app/features/components/sidebar/sidebar.module";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeaturesRoutingModule,
    SidebarModule,
    DialogModule
  ],
  exports: [
    FeaturesComponent
  ]
})

export class FeaturesModule {}
