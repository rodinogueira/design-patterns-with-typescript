import { CompositeFoodProtocol } from "../interfaces/composite-food-protocol";

export class MealBox implements CompositeFoodProtocol {
   private readonly _children: CompositeFoodProtocol[] = [];

   getPrice(): number {
       return this._children.reduce((sum, prod) => sum + prod.getPrice(), 0);
   }

   add(...products: CompositeFoodProtocol[]): void {
    products.forEach(product => this._children.push(product));
   }
}
