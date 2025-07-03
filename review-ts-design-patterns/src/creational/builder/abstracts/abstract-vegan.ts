import { VeganCompositeProtocol } from "../interfaces/vegan-composite-protocol";

export abstract class AbstractVegan implements VeganCompositeProtocol {
    constructor(private name: string, private price: number){}

    getPrice(): number {
        return this.price;
    }
}