import {NgModule} from "@angular/core";
import {VeterinaryVisitComponent} from "@app/features/components/modals/veterinary-visit/veterinary-visit.component";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {DialogModule} from "primeng/dialog";
import {CardModule} from "primeng/card";
import {SuggestionModalModule} from "@app/features/components/modals/suggestion-modal/suggestion-modal.module";

@NgModule({
  declarations: [
    VeterinaryVisitComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    CardModule,
    SuggestionModalModule
  ],
  exports: [
    VeterinaryVisitComponent
  ]
})

export class VeterinaryVisitModule {}
