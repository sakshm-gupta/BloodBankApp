import { Component, OnInit } from '@angular/core';
import { BloodGroup } from 'src/app/Models/blood-group';
import { BloodInventory } from 'src/app/Models/blood-inventory';
import { InventoryService } from 'src/app/Services/inventory.service';
 
@Component({
  selector: 'view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css']
})
export class ViewInventoryComponent implements OnInit {
  inventoryList !: BloodInventory[];
  bloodGroup = BloodGroup;
 
  constructor(private invService: InventoryService) { }
 
  ngOnInit(): void {
    this.invService.getList().subscribe(list => {
      this.inventoryList = list;
      console.log(list);
    }, err =>  {
      console.log(err);
    })
  }
 
  delete(id: number) {
    if(confirm('Do you really want to delete?')) {
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
}