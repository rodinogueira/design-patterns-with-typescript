import { CarFactory } from "./factories/car-factory";
import { BikeFactory } from "./factories/bike-factory";

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('Fusca')
fusca.pickup('Rodrigo');
fusca.stop();

const bikeFactory = new BikeFactory();
const bike = bikeFactory.getVehicle('Bike');
bike.pickup('Rodrigo');
bike.stop();