import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetDetailComponent} from "@app/features/pet-detail/pet-detail.component";

const routes: Routes = [
  {
    path: ':id',
    component: PetDetailComponent,
    children: [
      {
        path: '',
        redirectTo: 'general-information',
        pathMatch: 'full'
      },
      {
        path: 'general-information',
        loadChildren: () => import('./components/general-information/general-information.module').then(m => m.GeneralInformationModule)
      },
      {
        path: 'medical-information',
        loadChildren: () => import('./components/medical-information/medical-information.module').then(m => m.MedicalInformationModule)
      },
      {
        path: 'documents',
        loadChildren: () => import('./components/documents/documents.module').then(m => m.DocumentsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PetDetailRoutingModule {
}
