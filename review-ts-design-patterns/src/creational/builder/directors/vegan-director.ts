import { VeganBuilderProtocol } from '../interfaces/vegan-builder-protocol';
import { Rice, Beans, Salad } from '../abstracts/vegan';

// instâncias dos ingredientes
const rice = new Rice("Arroz Integral", 7);
const beans = new Beans("Feijão Preto", 9);
const salad = new Salad("Alface", 4);

export class VeganDirector {
  constructor(private _builder: VeganBuilderProtocol) {}

  constructCompleteVegan() {
    this._builder.reset().makeSalad([rice, beans, salad]);
  }
}
