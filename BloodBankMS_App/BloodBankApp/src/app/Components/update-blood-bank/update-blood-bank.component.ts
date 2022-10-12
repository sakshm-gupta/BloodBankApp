import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
 
@Component({
  selector: 'app-update-blood-bank',
  templateUrl: './update-blood-bank.component.html',
  styleUrls: ['./update-blood-bank.component.css']
})
export class UpdateBloodBankComponent implements OnInit {
  bloodBankForm!: FormGroup;
 
  constructor(private bloodBankService:BloodBankService,
    private router:Router,
    private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    let bloodBankId=this.route.snapshot.params['id'];
    console.log('bloodbank id '+bloodBankId);
 
    this.bloodBankService.getById(bloodBankId).subscribe(bloodBank=>{
      this.bloodBankForm=new FormGroup({
        "id":new FormControl(bloodBank.id),
        "bloodBankName":new FormControl(bloodBank.bloodBankName,Validators.required),
        "address":new FormControl(bloodBank.address,Validators.required),
        "city":new FormControl(bloodBank.city,Validators.required),
        "contactNo":new FormControl(bloodBank.contactNo,Validators.required)
      });
    },err=>{
      alert(err);
      console.log(err);
    })
  }
  onSubmit(){
    console.log(this.bloodBankForm);
    //service
    this.bloodBankService.update(this.bloodBankForm.value as unknown as BloodBank).subscribe(res=>{
      alert('Blood Bank updated successfully');
      //redirect to dept list
      this.router.navigate(['/bloodbankmenu']);
    },err=>{
      //alert(err);
      console.log(err);
    })
  }
}