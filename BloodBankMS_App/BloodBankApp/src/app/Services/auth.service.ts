import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../Models/login-dto';
import { User } from '../Models/user';



 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiBaseUrl + 'Users';
 
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
 
  constructor(private client: HttpClient) { }
 
  register(user:User):Observable<User>{
    
    return this.client.post<User>(this.apiUrl, user, this.httpOptions); 
  }
 
  login(user:User):Observable<LoginDto>{
    //https://localhost:4200/api/auth/login
    let login = this.client.post<LoginDto>(`${this.apiUrl}/login`, user, this.httpOptions);
    login.subscribe(result => {
    localStorage.setItem('userInfo', JSON.stringify(result));
    
    }, err => {
      return null;
    });
    return login;
  }
 
  getUser(): LoginDto{
    return JSON.parse(localStorage.getItem('userInfo') || '{}');
  }
 
  isUserLoggedIn(): boolean {
    if(localStorage.getItem('userInfo') == null) {
      return false;
    }
    return true;
  }
 
  logout(){
    localStorage.removeItem('userInfo');
  }
 
}