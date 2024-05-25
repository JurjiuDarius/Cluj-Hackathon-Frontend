import {NgModule} from "@angular/core";
import {SplashScreenComponent} from "@app/onboarding/splash-screen/splash-screen.component";
import {CommonModule} from "@angular/common";
import {SplashScreenRoutingModule} from "@app/onboarding/splash-screen/splash-screen-routing.module";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    SplashScreenRoutingModule,
    CardModule
  ],
  exports: [
    SplashScreenComponent
  ]
})

export class SplashScreenModule {}
