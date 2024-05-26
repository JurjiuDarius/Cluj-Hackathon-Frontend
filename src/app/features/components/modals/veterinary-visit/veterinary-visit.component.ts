import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-veterinary-visit',
  templateUrl: './veterinary-visit.component.html',
  styleUrls: ['./veterinary-visit.component.scss']
})
export class VeterinaryVisitComponent implements OnChanges {
  @Input() veterinaryData: any | undefined;
  @Input() visible: boolean = false;
  @Output() private closedModal: EventEmitter<FileList> = new EventEmitter();
  openSuggestion: boolean = false;
  selectedStageId: number | null = null;
  selectedSuggestion: any | undefined;

  constructor() { }

  ngOnChanges(): void {
    console.log(this.veterinaryData);
  }

  /**
   * Method to notify when the modal is closed
   */
  closeModal(): void {
    this.closedModal.emit();
  }

  /**
   * Method to notify when the modal is saved
   */
  save(): void {
    this.closedModal.emit();
  }

  showIcon(id: number): void {
    this.selectedStageId = id;
  }

  showSuggestionModal(suggestion: string): void {
    this.selectedSuggestion = suggestion;
    this.openSuggestion = true;
  }

  closedSuggestionModal(): void {
    this.openSuggestion = false;
    this.selectedStageId = 0;
  }
}
