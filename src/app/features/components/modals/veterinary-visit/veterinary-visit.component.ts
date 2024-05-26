import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-veterinary-visit',
  templateUrl: './veterinary-visit.component.html',
  styleUrls: ['./veterinary-visit.component.scss']
})
export class VeterinaryVisitComponent implements OnInit {
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
