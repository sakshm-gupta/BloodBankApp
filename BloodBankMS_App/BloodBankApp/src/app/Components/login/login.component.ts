import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userForm!:FormGroup;
  constructor(private authService:AuthService,
    private router:Router) { }

    ngOnInit(): void {
      this.userForm = new FormGroup({
        username : new FormControl("", Validators.required),
        password : new FormControl("", Validators.required),
      })
    }

    onSubmit(){
      this.authService.login(this.userForm.value as unknown as User).subscribe(result => {
        //alert('User registered successfully');
        //navigate to employees
        this.router.navigate(['/home']);
      }, err => {
        console.log(err);
        alert('Invalid Username or Password');
      })
    }







  // Validate()
  //   {
  //     // this.adminloginservice.Validate(this.admin).subscribe(res=>{
  //     //   console.log(res)
  //     //   if(res.message == "login successfull")
  //     //   {
  //         this.router.navigateByUrl('homepage');
  //     //   }
  //     //   else{
  //     //     this.errMsg="invalid login id or password";
  //     //   }

  //     // })
  //   }
}
