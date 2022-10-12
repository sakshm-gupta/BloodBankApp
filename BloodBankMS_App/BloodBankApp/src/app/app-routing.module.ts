import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBloodBankComponent } from './Components/add-blood-bank/add-blood-bank.component';
import { AddBloodDonationCampComponent } from './Components/add-blood-donation-camp/add-blood-donation-camp.component';
import { AddHospitalComponent } from './Components/add-hospital/add-hospital.component';
import { AddInventoryComponent } from './Components/add-inventory/add-inventory.component';
import { BloodDonationCampComponent } from './Components/blood-donation-camp/blood-donation-camp.component';
import { HomeComponent } from './Components/home/home.component';
import { HospitalComponent } from './Components/hospital/hospital.component';
import { LoginComponent } from './Components/login/login.component';
import { UpdateBloodBankComponent } from './Components/update-blood-bank/update-blood-bank.component';
import { UpdateBloodDonationCampComponent } from './Components/update-blood-donation-camp/update-blood-donation-camp.component';
import { UpdateHospitalComponent } from './Components/update-hospital/update-hospital.component';
import { UpdateInventoryComponent } from './Components/update-inventory/update-inventory.component';
import { ViewBloodBankComponent } from './Components/view-blood-bank/view-blood-bank.component';
import { ViewInventoryComponent } from './Components/view-inventory/view-inventory.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent },
  {path:'hospital',component:HospitalComponent},
  {path:'hospital/updHospital/:id',component:UpdateHospitalComponent},
  {path:'hospital/add',component:AddHospitalComponent},

  {path:'bloodbankmenu', component:ViewBloodBankComponent},
   {path:'bloodbankmenu/add',component:AddBloodBankComponent},
  {path:'bloodbankmenu/update/:id',component:UpdateBloodBankComponent},

  {path:'blooddonationcamp',component:BloodDonationCampComponent},
  {path:'blooddonationcamp/update/:id',component:UpdateBloodDonationCampComponent},
  {path:'blooddonationcamp/add', component:AddBloodDonationCampComponent},
  
  {path:'inventory',component:ViewInventoryComponent},
  {path:'inventory/update/:id',component:UpdateInventoryComponent},
  {path:'inventory/add',component:AddInventoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

