import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@app/core/models/user';
import { environment } from '@app/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiURL;
  constructor(private http: HttpClient) {}

  public getPatientsForDoctor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/doctor-patients/${id}`);
  }

  public getUserName(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/name/${id}`);
  }

  public addPatientForDoctor(
    patientEmail: any,
    doctorId: string
  ): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/add-patient/${doctorId}`, {
      email: patientEmail,
    });
  }

  public modifyUser(user: User): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/modify`, user);
  }
  public getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }
}
