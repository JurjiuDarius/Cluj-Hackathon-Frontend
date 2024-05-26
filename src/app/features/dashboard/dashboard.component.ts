import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPet } from '@app/core/models/pet.model';
import { ChatService } from '../service/chat.service';
import { PetService } from '../service/pet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  petsData: Array<IPet> = [
    {
      id: '1',
      name: 'Sasha',
      age: 2,
      gender: 'Male',
      color: 'Brown',
      profilePhoto: 'assets/images/dog1.jpg',
    },
    {
      id: '2',
      name: 'Sasha',
      age: 2,
      gender: 'Male',
      color: 'Brown',
      profilePhoto: 'assets/images/dog2.jpg',
    },
    {
      id: '3',
      name: 'Sasha',
      age: 2,
      gender: 'Male',
      color: 'Brown',
      profilePhoto: 'assets/images/dog3.jpg',
    },
  ];

  newPetModal: boolean = false;

  constructor(
    private petService: PetService,
    private router: Router,
    private chatService: ChatService
  ) {
    this.getPets();
  }

  ngOnInit(): void {}

  goToDetails(petData: string): void {
    this.router.navigate([`details/${petData}`]).then();
  }

  openNewPetModal(): void {
    this.chatService
      .getResponseForText('osteoporosis')
      .subscribe((response) => {
        console.log(response);
      });
    this.newPetModal = true;
  }

  closeNewPetModal(): void {
    this.newPetModal = false;
  }

  addNewPet(): void {}

  getPets(): void {
    let ownerId = Number(localStorage.getItem('currentUserId'));
    this.petService.getPetsForOwner(ownerId).subscribe((pets) => {
      pets.forEach((pet) => {
        this.petsData.push({
          id: '1',
          name: 'Sasha',
          age: 2,
          gender: 'Male',
          color: 'Brown',
          //randomly select an image from 1 to 3
          profilePhoto: `assets/images/dog${
            Math.floor(Math.random() * 3) + 1
          }.jpg`,
        });
      });
    });
  }
}
