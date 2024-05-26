import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@app/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  apiurl = environment.apiURL;
  constructor(private http: HttpClient) {}
  getResponseForText(text: string) {
    return this.http.post(this.apiurl + '/chat', { text: text });
  }
}
