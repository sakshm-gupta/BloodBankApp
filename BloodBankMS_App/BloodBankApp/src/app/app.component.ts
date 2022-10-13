import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BloodBankApp';

  constructor(private authService:AuthService){}
  
  isLoggedin():boolean{
    return this.authService.isUserLoggedIn();
  }
  logout(){
    this.authService.logout();
    alert('Logged Out Successfully');
  }
}
