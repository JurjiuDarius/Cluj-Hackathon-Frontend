import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  GeneralInformationComponent
} from "@app/features/pet-detail/components/general-information/general-information.component";

const routes: Routes = [
  {
    path: '',
    component: GeneralInformationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GeneralInformationRoutingModule {
}
