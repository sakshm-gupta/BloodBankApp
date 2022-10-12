import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
