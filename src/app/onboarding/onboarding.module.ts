import {NgModule} from "@angular/core";
import {OnboardingComponent} from "./onboarding.component";
import {CommonModule} from "@angular/common";
import {OnboardingRoutingModule} from "./onboarding-routing.module";
import {OnboardingWrapperModule} from "../features/components/onboarding-wrapper/onboarding-wrapper.module";

@NgModule({
  declarations: [
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    OnboardingWrapperModule,
    OnboardingRoutingModule
  ],
  exports: [
    OnboardingComponent
  ]
})

export class OnboardingModule {}
