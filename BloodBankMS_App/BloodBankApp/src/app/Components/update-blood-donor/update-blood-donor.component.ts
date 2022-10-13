import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodDonor } from 'src/app/Models/blood-donor';
import { BloodGroup } from 'src/app/Models/blood-group';
import { BlooddonorService } from 'src/app/Services/blood-donor.service';

 
@Component({
  selector: 'app-update-blood-donor',
  templateUrl: './update-blood-donor.component.html',
  styleUrls: ['./update-blood-donor.component.css']
})
export class UpdateblooddonorComponent implements OnInit {
  bloodGroup=BloodGroup;
  donorForm!: FormGroup;
  
  constructor(private donorService :BlooddonorService,
    private router:Router, 
    private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    let bloodDonorId = this.route.snapshot.params['id'];
    console.log('blooddonor id '+ bloodDonorId);
    this.donorService.getById(bloodDonorId).subscribe(res=>{
      this.donorForm = new FormGroup(
        {
          "id" : new FormControl(res.id),
          "firstName" : new FormControl(res.firstName,Validators.required),
          "lastName" :  new FormControl(res.lastName,Validators.required),
          "address" :  new FormControl(res.address,Validators.required),
         "city" :  new FormControl(res.city,Validators.required),
          "contactNo" :  new FormControl(res.contactNo,Validators.required),
         "bloodGroup" :  new FormControl(res.bloodGroup,Validators.required),
        });
      }, err =>{
        alert(err);
        console.log(err);
      })
  }
 
  onSubmit(){
    console.log(this.donorForm);
    //service
    this.donorService.update(this.donorForm.value as unknown as BloodDonor).subscribe(res=>{
      alert('Blood Donor updated successfully');
      //redirect to dept list
      this.router.navigate(['/blooddonor']);
    },err=>{
      alert(err.message);
      console.log(err);
    })
  }
  isNumber(id:any) : boolean{
    return typeof id === 'number';
  }
}

 