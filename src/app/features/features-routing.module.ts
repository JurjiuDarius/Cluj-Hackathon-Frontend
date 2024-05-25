import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeaturesComponent} from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'details', loadChildren: () => import('./pet-detail/pet-detail.module').then(m => m.PetDetailModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FeaturesRoutingModule {
}
