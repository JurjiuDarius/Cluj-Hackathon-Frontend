import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-information',
  templateUrl: './medical-information.component.html',
  styleUrls: ['./medical-information.component.scss']
})
export class MedicalInformationComponent implements OnInit {
  openVeterinaryVisitModal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setVeterinaryModal(): void {
    this.openVeterinaryVisitModal = true;
  }

  closedVeterinaryModal(): void {
    this.openVeterinaryVisitModal = false;
  }

}
