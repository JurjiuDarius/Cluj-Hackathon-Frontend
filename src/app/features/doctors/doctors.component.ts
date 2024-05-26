import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  doctorsData: Array<any> = [];

  newAppointmentModal: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    this.getPets();
  }

  ngOnInit(): void {}

  goToDetails(petData: string): void {
    this.router.navigate([`details/${petData}`]).then();
  }

  openNewAppointmentModal(): void {
    console.log('openNewAppointmentModal');
    this.newAppointmentModal = true;
  }

  closeNewAppointmentModal(): void {
    this.newAppointmentModal = false;
  }

  addNewPet(): void {}

  getPets(): void {
    let ownerId = Number(localStorage.getItem('currentUserId'));
    this.userService.getAllDoctors().subscribe((doctors) => {
      doctors.forEach((doctor, index) => {
        doctor.profilePhoto =
          'assets/images/doctor' + ((index % 3) + 1) + '.jpg';
        this.doctorsData.push(doctor);
      });
    });
  }
}
