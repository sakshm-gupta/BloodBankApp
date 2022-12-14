import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { Hospital } from 'src/app/Models/hospital';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
import { HospitalService } from 'src/app/Services/hospital.service';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {
  
hospForm1!:FormGroup;
bloodBankList!:BloodBank[];
  constructor(private hospService:HospitalService,private router:Router,private bloodBankService:BloodBankService) { }

  ngOnInit(): void {
    this.hospForm1=new FormGroup({
      "hospitalName": new FormControl("",Validators.required),
        "address": new FormControl("",Validators.required),
        "city": new FormControl("",Validators.required),
        "contactNo": new FormControl("",Validators.required),
        "bloodBankId": new FormControl("",Validators.required),
    });
    this.bloodBankService.getList().subscribe(list =>{
      this.bloodBankList=list;
    }, err => console.log(err)
    )
  }
  
  onSubmit(){
    console.log(this.hospForm1);
    //service
    this.hospService.add(this.hospForm1.value as unknown as Hospital).subscribe(res=>{
      alert('Hospital added successfully');
      //redirect to dept list
      this.router.navigate(['/hospital']);
    },err=>{
      alert(err.message);
      console.log(err);
    })
  }
}
