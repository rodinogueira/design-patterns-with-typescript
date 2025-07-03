import { Customer } from "./customer";

export class IndividualCustomer {
    constructor(public name:string) {}

    pickup() {
        console.log(`This IS ${this.name}`);
    }
}