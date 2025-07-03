import { Customer } from "../Customer/customer";
import { VehicleProtocol } from "../Vehicle/vehicle-protocol";

export interface CustomerVehicle {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}