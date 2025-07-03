import { VeganBox } from "./composite-vegan-box";
import { VeganBuilderProtocol } from "../interfaces/vegan-builder-protocol";
import { Rice, Beans, Salad } from './vegan';

export class VeganDishBuilder implements VeganBuilderProtocol {
    private _veganBox: VeganBox = new VeganBox();
    
    reset(): this {
        this._veganBox = new VeganBox();
        return this;
    }

    makeSalad(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 10);
        const salad = new Salad('Tomato', 20);
        this._veganBox.add(rice, beans, salad);
        return this;
    }

    getSalad(): VeganBox {
        return this._veganBox;
    }
}