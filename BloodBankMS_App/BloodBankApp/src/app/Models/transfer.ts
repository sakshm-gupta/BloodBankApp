import { BloodGroup } from "./blood-group";
 
export class Transfer {
    id!:number;
    fromId!:number;
    toId!:number;
    numberOfBottles!:number;
    bloodGroup!:BloodGroup;
}