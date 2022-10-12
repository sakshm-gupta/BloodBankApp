import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodDonationCamp } from '../Models/blood-donation-camp';
 
@Injectable({
  providedIn: 'root'
})
export class BloodDonationCampService {
  private apiUrl = environment.apiBaseUrl + 'BloodDonationCamps';
 
  private httpOptions = {
    headers: new HttpHeaders({'Content-type':'application/json'})
  }
 
  constructor(private client: HttpClient) { }
 
  getList(): Observable<BloodDonationCamp[]> {
    return this.client.get<BloodDonationCamp[]>(this.apiUrl);
  }
 
  getById(id: number): Observable<BloodDonationCamp> {
    return this.client.get<BloodDonationCamp>(`${this.apiUrl}/${id}`);
  }
 
  add(BloodDonationCamp:BloodDonationCamp): Observable<BloodDonationCamp> {
    return this.client.post<BloodDonationCamp>(this.apiUrl, BloodDonationCamp, this.httpOptions);
  }
 
  update(BloodDonationCamp:BloodDonationCamp):Observable<any>{
    return this.client.put<BloodDonationCamp>(`${this.apiUrl}/${BloodDonationCamp.id}`, BloodDonationCamp, this.httpOptions);
  }
 
  delete(id:number):Observable<any> {
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
 
}