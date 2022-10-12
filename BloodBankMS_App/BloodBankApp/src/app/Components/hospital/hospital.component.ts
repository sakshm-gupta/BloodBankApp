import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/Models/hospital';
import { HospitalService } from 'src/app/Services/hospital.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
HospitalList!:Hospital[];
  constructor(private hospServcie:HospitalService) { }

  ngOnInit(): void {
    this.hospServcie.getList().subscribe(list=>{
      this.HospitalList=list;
      console.log(list);
      },
    err=>{
      console.log(err);
      alert('API CALL FAILED');
    }
    )
  }
  delete(id:number)
  {
    if(confirm('Do you really want to delete?'))
    {
      console.log('deleting');
      this.hospServcie.delete(id).subscribe(result=>{
        alert('hospital deleted successfully');
        this.ngOnInit();
      },err=>{console.log(err);
      alert('Delete Failed due to some error');
    })
    }
  }
}
