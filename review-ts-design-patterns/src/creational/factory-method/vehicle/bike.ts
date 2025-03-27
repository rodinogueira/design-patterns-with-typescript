import { Vehicle } from "./vehicle";

export class Bike implements Vehicle {
  constructor(private name: string) {}
  pickup(customerName: string): void {
    console.log(`${customerName} esta buscando${this.name}`);
  }

  stop(): void {
    console.log("Stopping a bike");
  }
}
