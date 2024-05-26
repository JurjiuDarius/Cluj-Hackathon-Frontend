import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  doctorsData: Array<any> = [
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

  newAppointmentModal: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.getPets();
  }

  ngOnInit(): void {}

  goToDetails(petData: string): void {
    this.router.navigate([`details/${petData}`]).then();
  }

  openNewAppointmentModal(): void {
    this.newAppointmentModal = true;
  }

  closeNewAppointmentModal(): void {
    this.newAppointmentModal = false;
  }

  addNewPet(): void {}

  getPets(): void {
    let ownerId = Number(localStorage.getItem('currentUserId'));
    this.userService.getAllDoctors().subscribe((doctors) => {
      doctors.forEach((doctor) => {
        this.doctorsData.push(doctor);
      });
    });
  }
}
