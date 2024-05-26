import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatService } from '@app/features/service/chat.service';

@Component({
  selector: 'app-suggestion-modal',
  templateUrl: './suggestion-modal.component.html',
  styleUrls: ['./suggestion-modal.component.scss'],
})
export class SuggestionModalComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() private closedModal: EventEmitter<FileList> = new EventEmitter();
  @Input() selectedSuggestion: any | undefined;
  public suggestionResponse: any;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService
      .getResponseForText(this.selectedSuggestion)
      .subscribe((response) => {
        console.log(response);
        this.suggestionResponse = response;
      });
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
}
