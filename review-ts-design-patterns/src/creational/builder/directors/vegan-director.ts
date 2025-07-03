import { VeganBuilderProtocol } from '../interfaces/vegan-builder-protocol';

export class VeganDirector {
  constructor(private _builder: VeganBuilderProtocol) {}

  constructCompleteVegan() {
    this._builder.reset().makeSalad();
  }
}
