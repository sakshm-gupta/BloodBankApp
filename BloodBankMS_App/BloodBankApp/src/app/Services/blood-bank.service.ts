import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodBank } from '../Models/blood-bank';
 
@Injectable({
  providedIn: 'root'
})
export class BloodBankService {
  private apiUrl=environment.apiBaseUrl+'BloodBanks';
 
  private httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private client: HttpClient) { }
 
  getList(): Observable<BloodBank[]>{
    return this.client.get<BloodBank[]>(this.apiUrl);
  }
  add(bloodBank:BloodBank): Observable<BloodBank>{
    return this.client.post<BloodBank>(this.apiUrl,bloodBank,this.httpOptions);
  }
  getById(id:number): Observable<BloodBank>{
    return this.client.get<BloodBank>(`${this.apiUrl}/${id}`);
  }
  update(bloodBank:BloodBank):Observable<any>{
    return this.client.put<BloodBank>(`${this.apiUrl}/${bloodBank.id}`,bloodBank,this.httpOptions);
  }
  delete(id:number):Observable<any>{
    return this.client.delete<BloodBank>(`${this.apiUrl}/${id}`);
  }
}