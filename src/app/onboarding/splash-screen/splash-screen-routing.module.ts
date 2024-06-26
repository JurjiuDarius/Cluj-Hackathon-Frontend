import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SplashScreenComponent} from "@app/onboarding/splash-screen/splash-screen.component";

const routes: Routes = [{path: '', component: SplashScreenComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplashScreenRoutingModule {
}
