import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { BloodDonorDonationService } from 'src/app/Services/blood-donor-donation.service';
 
@Component({
  selector: 'app-blood-donor-donation',
  templateUrl: './add-blood-donor-donation.component.html',
  styleUrls: ['./add-blood-donor-donation.component.css']
})
export class AddBloodDonorDonationComponent implements OnInit {
  donationForm! : FormGroup;
 
  constructor(private client:BloodDonorDonationService,private router: Router,) {
 
   }
 
   ngOnInit(): void {
    this.donationForm=new FormGroup({
      "bloodDonorId":new FormControl("",Validators.required),
      "numberofBottle":new FormControl("",Validators.required),
      "weight":new FormControl("",Validators.required),
      "hBCount":new FormControl("",Validators.required),
      "bloodDonationCampId":new FormControl("",Validators.required),
      "bloodBankId":new FormControl("",Validators.required),
      "expiryDate":new FormControl(null,Validators.required),
      "bloodDonationDate":new FormControl(null,Validators.required),
    });
  }
 
  onSubmit(){
    console.log(this.donationForm);
    this.client.AddBloodDonorDonation(this.donationForm.value as unknown as BloodDonorDonation).subscribe(res=>{alert("Donation added successfully");
    // alert("Donation Added");
    this.router.navigate(['/blooddonordonation']);
 
  },
  err => alert(err));
  }
}