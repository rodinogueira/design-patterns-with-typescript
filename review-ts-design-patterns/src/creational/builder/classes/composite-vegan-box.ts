import { VeganCompositeProtocol } from "../interfaces/vegan-composite-protocol";

export class VeganBox implements VeganCompositeProtocol {
   private readonly _children: VeganCompositeProtocol[] = [];

   getPrice(): number {
       return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
   }

   add(...meal: VeganCompositeProtocol[]): void {
    meal.forEach(item => this._children.push(item));
   }
}
