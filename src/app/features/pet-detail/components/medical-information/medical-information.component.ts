import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-information',
  templateUrl: './medical-information.component.html',
  styleUrls: ['./medical-information.component.scss']
})
export class MedicalInformationComponent implements OnInit {
  openVeterinaryVisitModal: boolean = false;
  selectedVeterinaryVisit: any | undefined;
  veterinaryVisits: Array<any> = [
    {
      id: 1,
      dateOfVisit: 'January 12, 2024',
      reasonForVisit: 'Annual wellness exam',
      diagnosis: 'Healthy',
      treatmentGiven: 'General check-up, heartworm test',
      recommendations: 'Annual wellness check Next January',
      treatmentPlans: [
        {
          stage: 1,
          description: 'Ensure regular physical examinations and screenings.',
          period: ''
        },
        {
          stage: 2,
          description: 'Administer vaccinations and preventive treatments.\n',
          period: ''
        },
        {
          stage: 3,
          description: 'Provide balanced nutrition and regular exercise.',
          period: ''
        },
        {
          stage: 4,
          description: 'Maintain good dental hygiene and grooming practices.',
          period: ''
        }
      ]
    },
    {
      id: 2,
      dateOfVisit: 'April 22, 2024',
      reasonForVisit: 'Skin rash',
      diagnosis: 'Allergic dermatitis',
      treatmentGiven: 'Antihistamine injection, medicated shampoo',
      recommendations: 'Follow up in one month, monitor for any changes',
      treatmentPlans: [
        {
          stage: '1',
          description: 'Initial examination and diagnosis.',
          period: ''
        },
        {
          stage: '2',
          description: 'Antihistamine injection to reduce allergic reaction.',
          period: ''
        },
        {
          stage: '3',
          description: 'Medicated shampoo to soothe skin and reduce rash.',
          period: ''
        },
        {
          stage: '4',
          description: 'Follow-up examination to monitor progress and adjust treatment as necessary.',
          period: ''
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setVeterinaryModal(veterinary: any): void {
    this.selectedVeterinaryVisit = veterinary;
    this.openVeterinaryVisitModal = true;
  }

  closedVeterinaryModal(): void {
    this.openVeterinaryVisitModal = false;
  }

}
