import { Component, OnInit } from '@angular/core';
import { BloodGroup } from 'src/app/Models/blood-group';
import { BloodInventory } from 'src/app/Models/blood-inventory';
import { InventoryService } from 'src/app/Services/inventory.service';
 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
 
@Component({
  selector: 'view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {
  inventoryList !: BloodInventory[];
  bloodGroup = BloodGroup;
 
  bg1: string = "";
  bg = BloodGroup;
  enumKeys: string[] = [];
  filterList!: BloodInventory[];
  invForm!: FormGroup;
 
  constructor(private invService: InventoryService) {
    this.enumKeys = Object.keys(this.bg).filter(f => isNaN(Number(f)));
    console.log(this.enumKeys);
 
  }
 
  ngOnInit(): void {
    this.invService.getList().subscribe(list => {
      this.inventoryList = list;
      this.filterList = list;
      console.log(list);
    }, err => {
      console.log(err);
    })
 
    this.invForm = new FormGroup({
      "bloodGroup": new FormControl(null, Validators.required)
    });
  }
 
  delete(id: number) {
    if (confirm('Do you really want to delete?')) {
      console.log('deleting');
      this.invService.delete(id).subscribe(result => {
        alert("Inventory deleted");
        this.ngOnInit();
      }, err => {
        console.log(err);
        alert('Delete failed');
      })
    }
  }
 
  filter(){
    this.filterList = this.inventoryList.filter(f => this.bloodGroup[f.bloodGroup] == this.invForm.get("bloodGroup")?.value);
  }
 
  showAll(){
    this.filterList = this.inventoryList;
  }

  expired(expiryDate: Date):boolean {
    const datePipe = new DatePipe('en-US');
    
    var today = new Date();
    expiryDate = new Date(expiryDate);
 
    // console.log(today);
    // console.log(expiryDate);
    // console.log(today < expiryDate );
 
    if(today < expiryDate ) {
      return false;
    }
    else {
      return true;
    }
  }

}