import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodGroup } from 'src/app/Models/blood-group';
import { Transfer } from 'src/app/Models/transfer';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
import { TransferService } from 'src/app/Services/transfer.service';
 
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm!:FormGroup;
  bloodGroup=BloodGroup;
  bloodBankList!:BloodBank[];
 
  constructor(private client:TransferService,private router:Router, private bloodBankService:BloodBankService) { }
 
  ngOnInit(): void {
    this.bloodBankService.getList().subscribe(list =>{
      this.bloodBankList=list;
    }, err => console.log(err)
    )
 
    this.transferForm = new FormGroup(
      {
        "fromId" :  new FormControl("",[Validators.required]),
        "toId" :  new FormControl("",[Validators.required]),
        "numberOfBottles" :  new FormControl("",[Validators.required]),
        "bloodGroup" :  new FormControl("",[Validators.required]),
      }
    )
  }
 
  onSubmit(){
    console.log(this.transferForm);
    //service
    this.client.transfer(this.transferForm.value as unknown as Transfer).subscribe(res => {
      alert('Transferred Successfully');
      //redirect
      this.router.navigate(['/inventory']);
    },err =>{
      console.log(err);
      alert("Transfer Failed");
    })
  }
 
  isNumber(id:any) : boolean{
    return typeof id === 'number';
  }
 
}