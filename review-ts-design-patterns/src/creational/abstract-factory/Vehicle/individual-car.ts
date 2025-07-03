import { Customer } from "../Customer/customer";
import { VehicleProtocol } from "./vehicle-protocol";

export class IndividualCar implements VehicleProtocol{
    constructor(public name:string, private readonly customer: Customer ) {}
    pickUp(): void {
        console.log(`${this.name} está buscando ${this.customer.name} (INDIVIDUAL)`);
        
    }
}