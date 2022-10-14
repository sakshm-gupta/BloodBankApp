import { BloodBank } from "./blood-bank";

export class BloodDonationCamp {

    id!:number;
    campName!:string;
    address!:string;
    city!:string;
    bloodBankId!:number;
    campStartDate!:Date;
    campEndDate!:Date;
    bloodBank!:BloodBank;
}

