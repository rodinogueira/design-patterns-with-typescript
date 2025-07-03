import { MealBox } from "../composite/composite-meal-box";
import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { Rice, Beans, Meat, Beverage, Dessert } from '../abstracts/meals';

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this;
    }
    makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 10);
        const meat = new Meat('Carne', 20);
        this._meal.add(rice, beans, meat);
        return this;
    }
    makeBeverage(): this {
        const beverage = new Beverage('Bebida', 7);
        this._meal.add(beverage);
        return this;
    }
    makeDessert(): this {
        const dessert  = new Dessert('Sobremesa', 10);
        this._meal.add(dessert);
        return this;
    }
    getMeal(): MealBox {
        return this._meal;
    }
}