import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnboardingComponent} from "./onboarding.component";

const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      {
        path: 'login',
        loadChildren: (): any => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'splash-screen',
        loadChildren: (): any => import('./splash-screen/splash-screen.module').then(m => m.SplashScreenModule)
      },
      {
        path: '',
        redirectTo: 'splash-screen',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
