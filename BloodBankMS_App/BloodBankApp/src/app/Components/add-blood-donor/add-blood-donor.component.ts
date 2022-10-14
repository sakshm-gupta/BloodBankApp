import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BloodGroup } from 'src/app/Models/blood-group';
import { Router } from '@angular/router';

import { BloodDonor } from 'src/app/Models/blood-donor';
import { BlooddonorService } from 'src/app/Services/blood-donor.service';
 
@Component({
  selector: 'app-add-blood-donor',
  templateUrl: './add-blood-donor.component.html',
  styleUrls: ['./add-blood-donor.component.css']
})
export class AddblooddonorComponent implements OnInit {
  bloodGroup= BloodGroup;
  donorForm!: FormGroup;
 
  constructor(private donorService : BlooddonorService,private router:Router) { }
 
  ngOnInit(): void {
    this.donorForm = new FormGroup(
      {
        "firstName" : new FormControl("",[Validators.required]),
        "lastName" :  new FormControl("",[Validators.required]),
        "address" :  new FormControl("",[Validators.required]),
        "city" :  new FormControl("",[Validators.required]),
        "contactNo" :  new FormControl("",[Validators.required]),
        "bloodGroup" :  new FormControl("",[Validators.required])
      }
    )

    
  }
 
  onSubmit(){
    console.log(this.donorForm);
    //service
    this.donorService.add(this.donorForm.value as unknown as BloodDonor).subscribe(res => {
      alert('Donor added Successfully');
      //redirect
      this.router.navigate(['/blooddonor']);
    },err =>{
      console.log(err);
      alert(err.message);
    })
  }
  isNumber(id:any) : boolean{
    return typeof id === 'number';
  }
 
}