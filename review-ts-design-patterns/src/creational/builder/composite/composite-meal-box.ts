import { CompositeFoodProtocol } from "../interfaces/composite-food-protocol";

export class MealBox implements CompositeFoodProtocol {
   private readonly _children: CompositeFoodProtocol[] = [];

   getPrice(): number {
       return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
   }

   add(...meal: CompositeFoodProtocol[]): void {
    meal.forEach(item => this._children.push(item));
   }
}
