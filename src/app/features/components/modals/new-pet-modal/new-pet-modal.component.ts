import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PetService } from '@app/features/service/pet.service';

@Component({
  selector: 'app-new-pet-modal',
  templateUrl: './new-pet-modal.component.html',
  styleUrls: ['./new-pet-modal.component.scss'],
})
export class NewPetModalComponent implements OnInit {
  name: string = '';
  age: number = 1;
  gender: string = '';
  breed: string = '';
  @Input() visible: boolean = false;
  @Output() private closedModal: EventEmitter<FileList> = new EventEmitter();

  constructor(private petService: PetService) {}

  ngOnInit(): void {}

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
    let ownerId = Number(localStorage.getItem('currentUserId'));

    let payload = {
      name: this.name,
      age: this.age,
      breed: this.breed,
      gender: this.gender,
      ownerId: ownerId,
    };
    this.petService.addPet(payload).subscribe();
    this.closedModal.emit();
  }
}
