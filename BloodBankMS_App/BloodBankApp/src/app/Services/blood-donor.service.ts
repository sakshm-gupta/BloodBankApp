import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodDonor } from '../Models/blood-donor';
 
@Injectable({
  providedIn: 'root'
})
export class BlooddonorService {
  private apiUrl = environment.apiBaseUrl+'BloodDonors';
 
  private httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
 
  constructor(private client: HttpClient) { }
 
  getList(): Observable<BloodDonor[]>{
    return this.client.get<BloodDonor[]>(this.apiUrl);
  }
  add(bloodDonor:BloodDonor): Observable<BloodDonor>{
    return this.client.post<BloodDonor>(this.apiUrl,bloodDonor,this.httpOptions);
  }
  getById(id:number): Observable<BloodDonor>{
    return this.client.get<BloodDonor>(`${this.apiUrl}/${id}`);
  }
  update(bloodDonor:BloodDonor):Observable<any>{
    return this.client.put<BloodDonor>(`${this.apiUrl}/${bloodDonor.id}`,bloodDonor,this.httpOptions);
  }
  delete(id:number):Observable<BloodDonor>{
    return this.client.delete<BloodDonor>(`${this.apiUrl}/${id}`);
  }
}