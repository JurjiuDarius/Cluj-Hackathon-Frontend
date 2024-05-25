import {NgModule} from "@angular/core";
import {DocumentsComponent} from "@app/features/pet-detail/components/documents/documents.component";
import {CommonModule} from "@angular/common";
import {DocumentsRoutingModule} from "@app/features/pet-detail/components/documents/documents-routing.module";

@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule
  ],
  exports: [
    DocumentsComponent
  ]
})

export class DocumentsModule {}
