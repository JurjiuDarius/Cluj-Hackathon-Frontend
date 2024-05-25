import {NgModule} from "@angular/core";
import {SidebarComponent} from "@app/features/components/sidebar/sidebar.component";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})

export class SidebarModule {}
