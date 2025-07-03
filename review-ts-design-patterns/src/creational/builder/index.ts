import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";
import { Director } from "./directors/director";
import { VeganDirector } from "./directors/vegan-director";

const builder = new MainDishBuilder();
const director = new Director(builder);

director.constructCompleteMeal();
console.log(builder.getMeal());
console.log(builder.getMeal().getPrice());

const veganBuilder = new VeganDishBuilder();
const veganDirector = new VeganDirector(veganBuilder);

veganDirector.constructCompleteVegan();
console.log(veganBuilder.getSalad());
console.log(veganBuilder.getSalad().getPrice());
