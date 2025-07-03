import { CompositeFoodProtocol } from "../interfaces/composite-food-protocol";

export abstract class AbstractFood implements CompositeFoodProtocol {
    constructor(private name: string, private price: number){}

    getPrice(): number {
        return this.price;
    }
}