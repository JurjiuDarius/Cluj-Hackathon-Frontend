import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-pet-modal',
  templateUrl: './new-pet-modal.component.html',
  styleUrls: ['./new-pet-modal.component.scss']
})
export class NewPetModalComponent implements OnInit {
  @Input() visible: boolean = false;
  @Output() private closedModal: EventEmitter<FileList> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
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
