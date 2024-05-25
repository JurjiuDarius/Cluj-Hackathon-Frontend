import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NewPetModalComponent } from "@app/features/components/modals/new-pet-modal/new-pet-modal.component";
import { SharedModule } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";

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
    InputTextareaModule,
    FormsModule
  ],
  exports: [
    NewPetModalComponent
  ]
})

export class NewPetModalModule {}
