import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BloodDonor } from 'src/app/Models/blood-donor';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
import { BloodDonationCampService } from 'src/app/Services/blood-donation-camp.service';
import { BloodDonorDonationService } from 'src/app/Services/blood-donor-donation.service';
import { BlooddonorService } from 'src/app/Services/blood-donor.service';
 
@Component({
  selector: 'app-update-donor-donation',
  templateUrl: './update-blood-donor-donation.component.html',
  styleUrls: ['./update-blood-donor-donation.component.css']
})
export class UpdateBloodDonorDonationComponent implements OnInit {
 
  donationForm!: FormGroup;
  
  constructor(private donationService: BloodDonorDonationService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    let donationId = this.route.snapshot.params['id'];
    console.log('Donation id ' + donationId);
 
    this.donationService.getById(donationId).subscribe(donation =>{
      
      this.donationForm=new FormGroup({
        "id":new FormControl(donation.id,Validators.required),
        "bloodDonorId":new FormControl(donation.bloodDonorId,Validators.required),
        "numberofBottle":new FormControl(donation.numberofBottle,Validators.required),
        "weight":new FormControl(donation.weight,Validators.required),
        "hbCount":new FormControl(donation.hbCount,Validators.required),
        "bloodDonationCampId":new FormControl(donation.bloodDonationCampId,Validators.required),
        "bloodBankId":new FormControl(donation.bloodBankId,Validators.required),
        "expiryDate":new FormControl(donation.expiryDate,Validators.required),
        "bloodDonationDate":new FormControl(donation.bloodDonationDate,Validators.required),
      });
    }, (err: any) =>{
      alert(err);
      console.log(err);
    })
    


    
  }
 
  onSubmit(){
    //service
    console.log(this.donationForm);
    this.donationService.update(this.donationForm.value as unknown as BloodDonorDonation).subscribe(res => {
      alert('Donation Updated Successfully');
      this.router.navigate(['/blooddonordonation']);
    }, err => {
      console.log(err);
    })
  }
 
}