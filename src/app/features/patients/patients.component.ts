import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../service/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  patients: any[] = [];
  constructor(private patientService: PatientsService) {}

  ngOnInit(): void {
    let doctorId = Number(localStorage.getItem('doctorId'));
    this.patientService.getPatients(doctorId).subscribe((patients) => {
      this.patients = patients;
    });
  }
}
