import { Component, OnInit } from '@angular/core';
import { BloodDonor } from 'src/app/Models/blood-donor';
import { BloodGroup } from 'src/app/Models/blood-group';
import { BlooddonorService } from 'src/app/Services/blood-donor.service';

 
@Component({
  selector: 'app-view-blood-donor',
  templateUrl: './view-blood-donor.component.html',
  styleUrls: ['./view-blood-donor.component.css']
})
export class ViewblooddonorComponent implements OnInit {
  blooddonors!: BloodDonor[];
  bloodgroup=BloodGroup;
  constructor(private donorService: BlooddonorService) { }
 
  ngOnInit(): void {
    this.donorService.getList().subscribe(list =>{
      this.blooddonors = list;
      console.log(list);
    }, err =>{
      console.log(err);
      alert('API call failed');
    })
  }
 
  delete(id: number){
    if(confirm('Do you really want to delete?')){
      console.log('deleting');
      this.donorService.delete(id).subscribe(result =>{
        alert('Donor deleted');
        this.ngOnInit();
    }, (err) =>{
      console.log(err);
      alert('Delete failed');
    })
  }
}
 
}