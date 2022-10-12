import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { HospitalComponent } from './Components/hospital/hospital.component';
import { UpdateHospitalComponent } from './Components/update-hospital/update-hospital.component';
import { ViewBloodBankComponent } from './Components/view-blood-bank/view-blood-bank.component';
import { AddBloodBankComponent } from './Components/add-blood-bank/add-blood-bank.component';
import { UpdateBloodBankComponent } from './Components/update-blood-bank/update-blood-bank.component';
import { BloodDonationCampComponent } from './Components/blood-donation-camp/blood-donation-camp.component';
import { UpdateBloodDonationCampComponent } from './Components/update-blood-donation-camp/update-blood-donation-camp.component';
import { AddBloodDonationCampComponent } from './Components/add-blood-donation-camp/add-blood-donation-camp.component';


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
    AddBloodDonationCampComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
