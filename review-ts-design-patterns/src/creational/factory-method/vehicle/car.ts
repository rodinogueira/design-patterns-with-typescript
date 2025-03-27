import { Vehicle } from './vehicle'

export class Car implements Vehicle {
    constructor(private name: string) {}

    pickup(customerName: string): void {
        console.log(`${this.name} esta buscando ${customerName}`)
    }

    stop(): void {
        console.log(`${this.name} parou`)
    }
}