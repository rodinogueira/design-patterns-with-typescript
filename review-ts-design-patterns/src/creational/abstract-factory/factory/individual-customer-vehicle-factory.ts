import { Customer } from "../Customer/customer";
import { IndividualCustomer } from "../Customer/individual-customer";
import { IndividualCar } from "../Vehicle/individual-car";
import { VehicleProtocol } from "../Vehicle/vehicle-protocol";


export class IndividualCreateVehicleCustomerFactory implements VehicleProtocol {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }

  pickUp(): void {
      
  }
}   