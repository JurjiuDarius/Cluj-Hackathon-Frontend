import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) },
  { path: '', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
