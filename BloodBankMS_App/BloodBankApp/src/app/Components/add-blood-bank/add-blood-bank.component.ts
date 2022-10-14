import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
 
@Component({
  selector: 'app-add-blood-bank',
  templateUrl: './add-blood-bank.component.html',
  styleUrls: ['./add-blood-bank.component.css']
})
export class AddBloodBankComponent implements OnInit {
  bloodBankForm!: FormGroup;
 
  constructor(private bloodBankService:BloodBankService,
    private router:Router) { }
 
  ngOnInit(): void {
    this.bloodBankForm=new FormGroup({
      "bloodBankName":new FormControl("",Validators.required),
      "address":new FormControl("",Validators.required),
      "city":new FormControl("",Validators.required),
      "contactNo":new FormControl("",Validators.required)
    });
  }
  onSubmit(){
    console.log(this.bloodBankForm);
    //service
    this.bloodBankService.add(this.bloodBankForm.value as unknown as BloodBank).subscribe(res=>{
      alert('bloodBank added successfully');
      //redirect to dept list
      this.router.navigate(['/bloodbankmenu']);
    },err=>{
      alert(err.message);
      console.log(err);
    })
  }
}