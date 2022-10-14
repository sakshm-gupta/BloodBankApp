import { BloodBank } from "./blood-bank";
import { BloodGroup } from "./blood-group";

export class BloodInventory {
    id!:number;
    bloodGroup!:BloodGroup;
    numberofBottles!:number;
    bloodBankId!:number;
    expiryDate!:Date;
    bloodBank!:BloodBank;
}
