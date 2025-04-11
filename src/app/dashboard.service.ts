import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getUsersUrl = '';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(environment.baseUrl + this.getUsersUrl);
  }
}
