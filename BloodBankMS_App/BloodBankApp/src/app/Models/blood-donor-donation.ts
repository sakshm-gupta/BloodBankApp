// export class BloodDonorDonation {
//     id!:number;
//     bloodDonorId!:number;
//     bloodDonationDate!:Date;
//     numberofBottle!:number;
//     weight!:number;
//     hBCount!:number;
//     bloodDonationCampId!:number;
//     expiryDate!:Date;
//     bloodBankId!:number;
// }
import { BloodBank } from "./blood-bank";
import { BloodDonationCamp } from "./blood-donation-camp";
import { BloodDonor } from "./blood-donor";
 
export class BloodDonorDonation {
    id!:number;
    bloodDonorId!:number;
    bloodDonor!:BloodDonor;
    bloodDonationDate!:Date;
    numberofBottle!:number;
    weight!:number;
    hbCount!:number;
    bloodDonationCampId!:number;
    bloodDonationCamp!:BloodDonationCamp;
    expiryDate!:Date;
    bloodBankId!:number;
    bloodBank!:BloodBank;
}