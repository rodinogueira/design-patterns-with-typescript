import { MyDatabaseClassic } from "./db/my-database-classic";
import './module_a';

const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();

console.log(db1 === db2);

db1.add({name: 'Rodrigo', age: 37 });

db1.show();
