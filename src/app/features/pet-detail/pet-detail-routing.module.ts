import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetDetailComponent} from "@app/features/pet-detail/pet-detail.component";

const routes: Routes = [
  {
    path: ':id',
    component: PetDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PetDetailRoutingModule {
}
