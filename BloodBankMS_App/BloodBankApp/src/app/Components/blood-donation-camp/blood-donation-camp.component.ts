import { Component, OnInit } from '@angular/core';
import { BloodDonationCamp } from 'src/app/Models/blood-donation-camp';
import { BloodDonationCampService } from 'src/app/Services/blood-donation-camp.service';
 
@Component({
  selector: 'app-blood-donation-camp',
  templateUrl: './blood-donation-camp.component.html',
  styleUrls: ['./blood-donation-camp.component.css']
})
export class BloodDonationCampComponent implements OnInit {
 
  campList!:BloodDonationCamp[];
 
  constructor(private campService: BloodDonationCampService) { }
 
  ngOnInit(): void {
    this.campService.getList().subscribe(list => {
      this.campList = list;
      console.log(list);
    }, err => {
      console.log(err);
    })
  }
 
  delete(id: number){
    if(confirm('Do you really wish to Delete ?')) {
      console.log('Deleting');
      this.campService.delete(id).subscribe(result => {
        alert('Blood Donation Camp Deleted Successfully');
        this.ngOnInit(); //once deleted, refresh the list i.e. API
      }, err => {
        console.log(err);
        alert('Delete Failed !');
      })
    }
  }
}