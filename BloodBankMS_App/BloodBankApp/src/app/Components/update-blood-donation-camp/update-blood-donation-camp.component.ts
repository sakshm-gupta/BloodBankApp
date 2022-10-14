import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
import { BloodDonationCampService } from 'src/app/Services/blood-donation-camp.service';
 
@Component({
  selector: 'app-update-blood-donation-camp',
  templateUrl: './update-blood-donation-camp.component.html',
  styleUrls: ['./update-blood-donation-camp.component.css']
})
export class UpdateBloodDonationCampComponent implements OnInit {
 
  campForm!: FormGroup;
  
  //bloodDonationCampServices: any;
 
  constructor(private campService: BloodDonationCampService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    
    
    let campId = this.route.snapshot.params['id'];
    console.log('Camp id ' + campId);
    
    //get dept details by calling service, id
    this.campService.getById(campId).subscribe(camp =>{
      
    this.campForm = new FormGroup({
      "id": new FormControl(camp.id),
      "campName": new FormControl(camp.campName, Validators.required),
      "address": new FormControl(camp.address , Validators.required),
      "city": new FormControl(camp.city , Validators.required),
      "bloodBankId": new FormControl(camp.bloodBankId , Validators.required),
      "campStartDate": new FormControl(camp.campStartDate , Validators.required),
      "campEndDate": new FormControl(camp.campEndDate , Validators.required)
      
    });
    }, (err: any) =>{
      alert(err);
      console.log(err);
    })
  }
 
  onSubmit(){
    //service
    console.log(this.campForm);
    this.campService.update(this.campForm.value as unknown as BloodDonationCamp).subscribe(res => {
      alert('Camp Updated Successfully');
 
      //redirect to dept List
      this.router.navigate(['/blooddonationcamp']);
    }, err => {
      //alert(err);
      console.log(err);
    })
  }
}