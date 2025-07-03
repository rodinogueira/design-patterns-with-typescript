import { MealBox } from "../composite/composite-meal-box";
import { VeganBuilderProtocol } from "../interfaces/vegan-builder-protocol";

export class VeganDishBuilder implements VeganBuilderProtocol {
    private _veganBox: MealBox = new MealBox();
    
    reset(): this {
        this._veganBox = new MealBox();
        return this;
    }

    // makeSalad(): this {
    //     const rice = new Rice('Arroz', 5);
    //     const beans = new Beans('Feijão', 10);
    //     const salad = new Salad('Tomato', 20);
    //     this._veganBox.add(rice, beans, salad);
    //     return this;
    // }

    makeSalad(items: any[]): this {
        this._veganBox.add(...items);
        return this;
    }

    getSalad(): MealBox {
        return this._veganBox;
    }
}