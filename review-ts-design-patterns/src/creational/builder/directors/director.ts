import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';

export class Director {
  constructor(private _builder: MealBuilderProtocol) {}

  constructCompleteMeal() {
    this._builder.reset().makeMeal().makeBeverage().makeDessert();
  }

  constructSimpleMeal() {
    this._builder.reset().makeMeal();
  }
}
