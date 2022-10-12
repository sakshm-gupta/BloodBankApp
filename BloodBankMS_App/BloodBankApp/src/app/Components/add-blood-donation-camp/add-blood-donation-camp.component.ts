import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BloodDonationCampService } from 'src/app/Services/blood-donation-camp.service';
 
@Component({
  selector: 'app-add-blood-donation-camp',
  templateUrl: './add-blood-donation-camp.component.html',
  styleUrls: ['./add-blood-donation-camp.component.css']
})
export class AddBloodDonationCampComponent implements OnInit {
 
  campForm!: FormGroup;
 
  constructor(private campService: BloodDonationCampService,
    private router:Router) { }
 
  ngOnInit(): void {
    this.campForm = new FormGroup({
      "campName": new FormControl("", Validators.required),
      "address": new FormControl("", Validators.required),
      "city": new FormControl("", Validators.required),
      "bloodBankId": new FormControl("", Validators.required),
      "campStartDate": new FormControl("", Validators.required),
      "campEndDate": new FormControl("", Validators.required),
      
    })
  }
 
  onSubmit(){
    //service
    console.log(this.campForm);
    this.campService.add(this.campForm.value as unknown as BloodDonationCamp).subscribe(res => {
      alert('Camp Added Successfully');
 
      //redirect to dept List
      this.router.navigate(['/blooddonationcamp']);
    }, err => {
      //alert(err);
      console.log(err);
    })
  }
}