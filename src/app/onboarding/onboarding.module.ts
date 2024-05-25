import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OnboardingWrapperModule } from '../features/components/onboarding-wrapper/onboarding-wrapper.module';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { OnboardingComponent } from './onboarding.component';

@NgModule({
  declarations: [OnboardingComponent],
  imports: [
    CommonModule,
    OnboardingWrapperModule,
    OnboardingRoutingModule,
    HttpClientModule,
  ],
  exports: [OnboardingComponent],
})
export class OnboardingModule {}
