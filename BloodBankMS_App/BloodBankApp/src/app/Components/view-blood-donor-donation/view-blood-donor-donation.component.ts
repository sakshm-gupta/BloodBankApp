import { Component, OnInit } from '@angular/core';
import { BloodDonor } from 'src/app/Models/blood-donor';
import { BloodDonorDonation } from 'src/app/Models/blood-donor-donation';
import { BloodDonorDonationService } from 'src/app/Services/blood-donor-donation.service';
 
@Component({
  selector: 'app-get-donor-donation',
  templateUrl: './view-blood-donor-donation.component.html',
  styleUrls: ['./view-blood-donor-donation.component.css']
})
export class ViewBloodDonorDonationComponent implements OnInit {
  donorDonations!:BloodDonorDonation[];
  bloodDonor!:BloodDonor;
 
  constructor(private donorDonationService:BloodDonorDonationService) { }
 
  ngOnInit(): void {
    this.donorDonationService.getList().subscribe(list =>{
      this.donorDonations=list;
      console.log(list);
      
    },(err: any) => console.log(err)
    )
  }
 
  delete(id:number){
    if(confirm("Donation will be deleted")){
      console.log("Deleted");
      this.donorDonationService.delete(id).subscribe((result: any) => {
        alert("Donation successfully deleted");
        this.ngOnInit();
      }, (err: any) => console.log(err)
      )
    }
  }
 
}