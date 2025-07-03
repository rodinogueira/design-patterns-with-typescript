function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const personPrototype = {
    firstName: 'Rodrigo',
    lastName: 'Nogueira',
    age: 37,

    fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = "Sara";
console.log(anotherPerson); 
const person1 = new Person('Nogueirajsx', 'Santos', 37);
console.log(person1.fullName());