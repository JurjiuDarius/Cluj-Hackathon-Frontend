import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environment';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  apiUrl = environment.apiURL;
  constructor(private http: HttpClient) {}

  getPetsForOwner(ownerId: number) {
    return this.http.get<any[]>(this.apiUrl + '/pets' + ownerId);
  }

  addPet(pet: any) {
    return this.http.post(this.apiUrl + '/pet', pet);
  }
}
