import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPet } from '@app/core/models/pet.model';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails(petData: string): void {
    this.router.navigate([`details/${petData}`]).then();
  }

  openNewPetModal(): void {
    this.newPetModal = true;
  }

  closeNewPetModal(): void {
    this.newPetModal = false;
  }

  addNewPet(): void {}

  getPets(): void {}
}
