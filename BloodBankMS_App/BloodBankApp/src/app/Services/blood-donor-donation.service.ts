import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodDonorDonation } from '../Models/blood-donor-donation';
 
@Injectable({
  providedIn: 'root'
})
export class BloodDonorDonationService {
 
  apiUrl=environment.apiBaseUrl +'BloodDonorDonations';
  private httpOptions ={
    headers : new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private client:HttpClient) { }
 
  AddBloodDonorDonation(item:BloodDonorDonation):Observable<BloodDonorDonation>
  {
    return this.client.post<BloodDonorDonation>(this.apiUrl,item,this.httpOptions);
  }
 
  getList():Observable<BloodDonorDonation[]>{
    return this.client.get<BloodDonorDonation[]>(this.apiUrl);
  }
 
  delete(id:number):Observable<any>{
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
 
  getById(id: number): Observable<BloodDonorDonation> {
    return this.client.get<BloodDonorDonation>(`${this.apiUrl}/${id}`);
  }
 
  update(BloodDonorDonation:BloodDonorDonation):Observable<any>{
    return this.client.put<BloodDonorDonation>(`${this.apiUrl}/${BloodDonorDonation.id}`, BloodDonorDonation, this.httpOptions);
  }
}