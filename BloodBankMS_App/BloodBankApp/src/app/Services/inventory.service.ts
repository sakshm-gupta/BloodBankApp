import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BloodGroup } from '../Models/blood-group';
import { BloodInventory } from '../Models/blood-inventory';

 
@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 
  //http://localhost:4200/api/BloodInventories
  private apiUrl = environment.apiBaseUrl + 'BloodInventories';
 
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }
 
  constructor(private client: HttpClient) { }
 
  getList(): Observable<BloodInventory[]> {
    return this.client.get<BloodInventory[]>(this.apiUrl);
  }
 
  getById(id: number): Observable<BloodInventory> {
    return this.client.get<BloodInventory>(`${this.apiUrl}/${id}`);
  }
 
  add(dept: BloodInventory): Observable<BloodInventory> {
    return this.client.post<BloodInventory>(this.apiUrl, dept, this.httpOptions);
  }
 
  update(dept: BloodInventory): Observable<any> {
    return this.client.put<BloodInventory>(`${this.apiUrl}/${dept.id}`, dept, this.httpOptions);
  }
 
  delete(id: number):Observable<any> {
    return this.client.delete<BloodInventory>(`${this.apiUrl}/${id}`);
  }
  
  search(bloodGroup:BloodGroup): Observable<BloodInventory[]> {
    return this.client.get<BloodInventory[]>(`${this.apiUrl}/bloodgroup/${bloodGroup}`);
  }
}