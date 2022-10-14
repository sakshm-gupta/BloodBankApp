import { DatePipe } from '@angular/common';
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
  bloodBankList!: BloodBank[];
  campForm!: FormGroup;
  date=new Date;

  //bloodDonationCampServices: any;

  constructor(private campService: BloodDonationCampService,
    private router: Router,
    private route: ActivatedRoute, private bloodBankService: BloodBankService) { }

  ngOnInit(): void {
    const datePipe = new DatePipe('en-US');
    let camId = this.route.snapshot.params['id'];
this.bloodBankService.getList().subscribe(list => {
      this.bloodBankList = list;
    }, err => { console.log(err); });

    console.log('Camp id' + camId);
    //get dept details by calling service, id
    this.campService.getById(camId).subscribe(camp => {
      this.campForm = new FormGroup({
        "id": new FormControl(camp.id),
        "campName": new FormControl(camp.campName),
        "address": new FormControl(camp.address),
        "city": new FormControl(camp.city),
        "bloodBankId": new FormControl(camp.bloodBankId),
        "campStartDate": new FormControl(datePipe.transform(camp.campStartDate, 'yyyy-MM-dd')),
        "campEndDate": new FormControl(datePipe.transform(camp.campEndDate, 'yyyy-MM-dd'))
      });
      console.log(camp);
    }, err => {
      alert(err.message);
      console.log(err);
    });
  }

  onSubmit() {
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