const personPrototype = {
    firstName: 'Rodrigo',
    lastName: 'Nogueira',
    age: 37,

    fullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

const anotherPerson = Object.create(personPrototype);
// console.log(anotherPerson.firstName = 'Santos');
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());