import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BloodDonor } from 'src/app/Models/blood-donor';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
import { BloodDonationCampService } from 'src/app/Services/blood-donation-camp.service';
import { BloodDonorDonationService } from 'src/app/Services/blood-donor-donation.service';
import { BlooddonorService } from 'src/app/Services/blood-donor.service';
 
@Component({
  selector: 'app-blood-donor-donation',
  templateUrl: './add-blood-donor-donation.component.html',
  styleUrls: ['./add-blood-donor-donation.component.css']
})
export class AddBloodDonorDonationComponent implements OnInit {
  donationForm! : FormGroup;
  donorList!:BloodDonor[];
  bloodBankList!:BloodBank[];
  donationList!:BloodDonationCamp[];
  constructor(private client:BloodDonorDonationService,private bloodDonationCampService:BloodDonationCampService,private bloodBankService:BloodBankService,private router: Router,private bloodDonorService:BlooddonorService) {
 
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

    this.bloodDonorService.getList().subscribe(list =>{
      this.donorList=list;
    }, err => console.log(err)
    )
    this.bloodBankService.getList().subscribe(list =>{
      this.bloodBankList=list;
    }, err => console.log(err)
    )
    this.bloodDonationCampService.getList().subscribe(list =>{
      this.donationList=list;
    }, err => console.log(err)
    )
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