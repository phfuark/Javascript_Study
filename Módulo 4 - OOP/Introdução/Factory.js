class Person {

    age =0;

    constructor (name){
        this.name = name;
    }
}

function creatPerson(name, age) {
    let person = new Person(name)
    person.age = age;
    return person;
}

let person1 = creatPerson('Paulo', 17);

console.log(`${person1.name} tem ${person1.age} anos.`)