import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BloodBank } from 'src/app/Models/blood-bank';
import { BloodGroup } from 'src/app/Models/blood-group';
import { BloodInventory } from 'src/app/Models/blood-inventory';
import { BloodBankService } from 'src/app/Services/blood-bank.service';
import { InventoryService } from 'src/app/Services/inventory.service';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {
  bloodBankList !: BloodBank[];
  bloodGroup = BloodGroup;
  invForm !: FormGroup;
  
  constructor(private bloodBankService: BloodBankService,
    private invService: InventoryService,
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    const datePipe = new DatePipe('en-US');
    //get inventory id param
    let invId = this.route.snapshot.params['id'];
    console.log('Inventory id : ' + invId);
 
    this.invService.getById(invId).subscribe( inv => {
      this.invForm = new FormGroup({
        id: new FormControl(inv.id),
        bloodGroup: new FormControl(inv.bloodGroup, Validators.required),
        numberofBottles: new FormControl(inv.numberofBottles, Validators.required),
        bloodBankId: new FormControl(inv.bloodBankId, Validators.required),
        expiryDate: new FormControl(datePipe.transform(inv.expiryDate, 'yyyy-MM-dd'), Validators.required),
      });
    }, err => {
      alert(err);
      console.log(err);
    })
 
    this.bloodBankService.getList().subscribe(list => {
      this.bloodBankList = list;
      //console.log(list);
    }, err =>  {
      console.log(err);
    });
  }
 
  onSubmit() {
    this.invService.update(this.invForm.value as unknown as BloodInventory).subscribe(result => {
      alert('Inventory updated successfully');
      //redirect to emp List
      this.router.navigate(['/inventory']);
    }, err => {
      console.log(err);
      alert(err);
    })
  }
 
  isNumber(id:any) : boolean{
    return typeof id === 'number';
  }
 
}