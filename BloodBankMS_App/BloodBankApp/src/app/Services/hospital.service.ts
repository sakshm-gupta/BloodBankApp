import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hospital } from '../Models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private apiUrl=environment.apiBaseUrl +'Hospitals';

  private httpOptions= {
    headers: new HttpHeaders({'Content-Type':'application/json'})
   }
  constructor(private  client:HttpClient) { }

  getList(): Observable<Hospital[]>{
    return this.client.get<Hospital[]>(this.apiUrl);
  }
  delete(id:number):Observable<any>
  {
    return this.client.delete<Hospital>(`${this.apiUrl}/${id}`);
  }
  update(hosp:Hospital):Observable<any>{

    return this.client.put<Hospital>(`${this.apiUrl}/${hosp.id}`,hosp,this.httpOptions);
  }
  getById(id:number): Observable<Hospital>
  {
    return this.client.get<Hospital>(`${this.apiUrl}/${id}`);
  }
  add(hospital:Hospital): Observable<Hospital> {
    return this.client.post<Hospital>(this.apiUrl, hospital, this.httpOptions);
  }
 
  
}
