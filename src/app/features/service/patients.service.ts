import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientsService {
  apiUrl = environment.apiURL;
  constructor(private http: HttpClient) {}

  getPatients(doctorId: number) {
    return this.http.get<any[]>(this.apiUrl + '/doctor-owners/' + doctorId);
  }
}
