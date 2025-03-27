import { VehicleFactory } from "./vehicle-factory";
import { Vehicle } from "../vehicle/vehicle";
import { Bike } from "../vehicle/bike";
export class BikeFactory extends VehicleFactory {
    getVehicle(customerName: string): Vehicle{
        return new Bike(customerName)
    }
}
