import { Component, OnInit } from '@angular/core';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
 
@Component({
  selector: 'app-view-blood-bank',
  templateUrl: './view-blood-bank.component.html',
  styleUrls: ['./view-blood-bank.component.css']
})
export class ViewBloodBankComponent implements OnInit {
  bloodBankList!: BloodBank[];
 
  constructor(private bloodBankService: BloodBankService) { }
 
  ngOnInit(): void {
    this.bloodBankService.getList().subscribe(list=>{
      this.bloodBankList=list;
      console.log(list);
    },err=>{
      console.log(err);
    })
  }
  delete(id:number){
    if(confirm('Do you really want to delete?')){
      console.log('deleting');
      this.bloodBankService.delete(id).subscribe(result=>{
        alert('Blood Bank Deleted');
        this.ngOnInit();
      },err=>{
        console.log(err);
        alert('Delete failed');
      })
    }
  }
}