import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalService } from 'src/app/Services/hospital.service';

@Component({
  selector: 'app-update-hospital',
  templateUrl: './update-hospital.component.html',
  styleUrls: ['./update-hospital.component.css']
})
export class UpdateHospitalComponent implements OnInit {
  hospForm!:FormGroup;

  constructor(private hospService:HospitalService,private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    //service method call,pass id and get dept details

    let hospId = this.route.snapshot.params['id'];
    console.log('Hospital id'+hospId);

    this.hospService.getById(hospId).subscribe(hosp=>{
      this.hospForm = new FormGroup({
        "id":new FormControl(hosp.id),
        "hospitalName": new FormControl(hosp.hospitalName,Validators.required),
        "address": new FormControl(hosp.address,Validators.required),
        "city": new FormControl(hosp.city,Validators.required),
        "contactNo": new FormControl(hosp.contactNo,Validators.required),
        "bloodBankId": new FormControl(hosp.bloodBankId,Validators.required),

      });
    },err=>{
      alert(err.message);
      console.log(err);
    })
    
  }

  onSubmit(){
    console.log(this.hospForm);
    this.hospService.update(this.hospForm.value as unknown as Hospital).subscribe(res=>{
      alert('hospital Updated successfully');

      //redirect to dept-list
      this.router.navigate(['/hospital']);
    },err=>{alert(err.message);
      console.log(err);
    })
  }
}
