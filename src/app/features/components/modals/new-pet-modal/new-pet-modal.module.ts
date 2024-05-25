import {NgModule} from "@angular/core";
import {NewPetModalComponent} from "@app/features/components/modals/new-pet-modal/new-pet-modal.component";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {InputTextareaModule} from "primeng/inputtextarea";

@NgModule({
  declarations: [
    NewPetModalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    DialogModule,
    InputTextareaModule
  ],
  exports: [
    NewPetModalComponent
  ]
})

export class NewPetModalModule {}
