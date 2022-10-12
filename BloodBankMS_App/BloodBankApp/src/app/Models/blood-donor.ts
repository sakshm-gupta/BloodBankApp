import { BloodGroup } from "./blood-group";

export class BloodDonor {
    id!:number;
    firstName!:string;
    lastName!:string;
    address!:string;
    city!:string;
    contactNo!:number;
    bloodGroup!:BloodGroup;
}
