import {NgModule} from "@angular/core";
import {SuggestionModalComponent} from "@app/features/components/modals/suggestion-modal/suggestion-modal.component";
import {CommonModule} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    SuggestionModalComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DialogModule
  ],
  exports: [
    SuggestionModalComponent
  ]
})

export class SuggestionModalModule {}
