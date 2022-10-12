import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodGroup } from 'src/app/Models/blood-group';
import { BloodInventory } from 'src/app/Models/blood-inventory';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
import { InventoryService } from 'src/app/Services/inventory.service';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {
  bloodBankList !: BloodBank[];
  bloodGroup = BloodGroup;
  invForm !: FormGroup;
  
  constructor(private bloodBankService: BloodBankService,
      private invService: InventoryService,
      private router: Router) { }
 
      ngOnInit(): void {
        this.bloodBankService.getList().subscribe(list => {
          this.bloodBankList = list;
          //console.log(list);
        }, err =>  {
          console.log(err);
        });
 
    this.invForm = new FormGroup({
      bloodGroup: new FormControl(null, Validators.required),
      numberofBottles: new FormControl("", Validators.required),
      bloodBankId: new FormControl("", Validators.required),
      expiryDate: new FormControl("", Validators.required),
    });
  }
 
  onSubmit() {
    this.invService.add(this.invForm.value as unknown as BloodInventory).subscribe(result => {
      alert('Inventory added successfully');
      //redirect to emp List
      //this.router.navigate(['inventory']);
    }, err => {
      console.log(err);
      alert(err);
    })
  }
 
  isNumber(id:any) : boolean{
    return typeof id === 'number';
  }
 
}