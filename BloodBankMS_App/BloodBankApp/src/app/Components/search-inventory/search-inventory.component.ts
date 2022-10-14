import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BloodGroup } from 'src/app/Models/blood-group';
import { BloodInventory } from 'src/app/Models/blood-inventory';
import { InventoryService } from 'src/app/Services/inventory.service';

@Component({
  selector: 'app-search-inventory',
  templateUrl: './search-inventory.component.html',
  styleUrls: ['./search-inventory.component.css']
})
export class SearchInventoryComponent implements OnInit {
  searchForm!:FormGroup;
bloodGroup=BloodGroup;

  constructor(private invertoryService:InventoryService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup(
      {        
        "bloodGroup" :  new FormControl("",[Validators.required])
      }
    )

    // this.searchForm.getList().subscribe(list => {
    //   this.searchList = list;
    //   console.log(list);
    // }, err => {
    //   console.log(err);
    // })
  }

  isNumber(id:any) : boolean{
    return typeof id === 'number';
  }
  onSubmit(){
   this.invertoryService.search(this.searchForm.value as unknown as BloodGroup).subscribe(result=>
    {
      alert('search done');
    })
  }
}
