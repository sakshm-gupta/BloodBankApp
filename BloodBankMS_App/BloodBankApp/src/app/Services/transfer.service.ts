import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transfer } from '../Models/transfer';
 
@Injectable({
  providedIn: 'root'
})
export class TransferService {
 
  private apiUrl = environment.apiBaseUrl + 'Transfers';
 
  private httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  }
 
  constructor(private client: HttpClient) { }
 
  transfer(tranfer: Transfer): Observable<Transfer> {
    return this.client.post<Transfer>(this.apiUrl, tranfer, this.httpOptions);
  }
}