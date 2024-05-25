import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '@app/core/models/user';
import { AppointmentsService } from '@app/features/service/appointments.service';
import { timeSlotValidator } from '@app/utils/validators/time-slot-validator';
@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent {
  public appointment: any;
  public pets = [];
  public form: FormGroup;
  public currentUserId: number | null = null;
  public currentRole: string | null = null;
  public patients: User[] = [];

  constructor(
    private appointmentsService: AppointmentsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.getAppointmentById();
    this.form = this.fb.group(
      {
        requirements: ['', Validators.nullValidator],
        address: ['', Validators.required],
        date: [null, Validators.required],
        email: [null, Validators.required],
        startTime: [null, Validators.required],
        endTime: [null, Validators.required],
        petId: [null, Validators.required],
      },
      { validators: timeSlotValidator }
    );
  }

  private getAppointmentById(): void {
    let id_ = this.route.snapshot.paramMap.get('id');
    console.log(id_);
    if (id_ == 'new' || id_ == null) {
      this.appointment = {
        id: -1,
        requirements: '',
        address: '',
        date: new Date(),
        email: '',
        startTime: new Date(),
        endTime: new Date(),
        requiresUpload: false,
        doctorId: 0,
      };
    } else {
      let id = Number(id_);

      this.appointmentsService.getAppointmentById(id).subscribe((response) => {
        this.appointment = response;
        this.form.patchValue({
          requirements: response.requirements,
          address: response.address,
          petId: response.petId,
          date: response.date,
          startTime: response.startTime,
          endTime: response.endTime,
          requiresUpload: response.requiresUpload,
        });
      });
    }
  }

  public onSubmit(): void {
    if (this.form?.valid) {
      const payload = {
        requirements: this.form?.get('requirements')?.value,
        address: this.form?.get('address')?.value,
        date: this.form?.get('date')?.value,
        startTime: this.form?.get('startTime')?.value,
        endTime: this.form?.get('endTime')?.value,
        petId: this.form?.get('petId')?.value,
        doctorId: Number(localStorage.getItem('currentUserId')),
        requiresUpload: this.form?.get('requiresUpload')?.value,
      };

      if (this.appointment?.id == -1) {
        this.appointmentsService.createAppointment(payload).subscribe({
          next: () => {
            this.router.navigate(['/appointments']);
          },
          error: (error) => console.log(error),
        });
      } else {
        this.appointmentsService
          .updateAppointment(this.appointment?.id, payload)
          .subscribe({
            next: () => {
              this.router.navigate(['/appointments']);
            },
            error: () => {},
          });
      }
    } else {
      console.log('Invalid form');
    }
  }
}
