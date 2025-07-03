import { VeganCompositeProtocol } from "../interfaces/vegan-composite-protocol";

export class VeganBox implements VeganCompositeProtocol {
   private readonly _children: VeganCompositeProtocol[] = [];

   getPrice(): number {
       return this._children.reduce((sum, prod) => sum + prod.getPrice(), 0);
   }

   add(...products: VeganCompositeProtocol[]): void {
    products.forEach(product => this._children.push(product));
   }
}
