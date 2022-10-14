import { BloodBank } from "./blood-bank";

export class Hospital {
    id!:number;
    hospitalName!:string;
    address!:string;
    city!:string;
    contactNo!:number;
    bloodBankId!:number;
    bloodBank!:BloodBank;
}
