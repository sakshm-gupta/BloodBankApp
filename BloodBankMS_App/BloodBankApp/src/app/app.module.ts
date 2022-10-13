import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { HospitalComponent } from './Components/hospital/hospital.component';
import { UpdateHospitalComponent } from './Components/update-hospital/update-hospital.component';
import { ViewBloodBankComponent } from './Components/view-blood-bank/view-blood-bank.component';
import { AddBloodBankComponent } from './Components/add-blood-bank/add-blood-bank.component';
import { UpdateBloodBankComponent } from './Components/update-blood-bank/update-blood-bank.component';
import { BloodDonationCampComponent } from './Components/blood-donation-camp/blood-donation-camp.component';
import { UpdateBloodDonationCampComponent } from './Components/update-blood-donation-camp/update-blood-donation-camp.component';
import { AddBloodDonationCampComponent } from './Components/add-blood-donation-camp/add-blood-donation-camp.component';
import { UpdateInventoryComponent } from './Components/update-inventory/update-inventory.component';
import { ViewInventoryComponent } from './Components/view-inventory/view-inventory.component';
import { AddInventoryComponent } from './Components/add-inventory/add-inventory.component';
import { AddHospitalComponent } from './Components/add-hospital/add-hospital.component';
import { ViewBloodDonorDonationComponent } from './Components/view-blood-donor-donation/view-blood-donor-donation.component';
import { AddBloodDonorDonationComponent } from './Components/add-blood-donor-donation/add-blood-donor-donation.component';
import { UpdateBloodDonorDonationComponent } from './Components/update-blood-donor-donation/update-blood-donor-donation.component';
import { ViewblooddonorComponent } from './Components/view-blood-donor/view-blood-donor.component';
import { UpdateblooddonorComponent } from './Components/update-blood-donor/update-blood-donor.component';
import { AddblooddonorComponent } from './Components/add-blood-donor/add-blood-donor.component';
import { TransferComponent } from './Components/transfer/transfer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HospitalComponent,
    UpdateHospitalComponent,
    ViewBloodBankComponent,
    AddBloodBankComponent,
    UpdateBloodBankComponent,
    BloodDonationCampComponent,
    UpdateBloodDonationCampComponent,
    AddBloodDonationCampComponent,
    UpdateInventoryComponent,
    ViewInventoryComponent,
    AddInventoryComponent,
    AddHospitalComponent,
    ViewBloodDonorDonationComponent,
    AddBloodDonorDonationComponent,
    UpdateBloodDonorDonationComponent,
    ViewblooddonorComponent,
    UpdateblooddonorComponent,
    AddblooddonorComponent,
    TransferComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
