class Person {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person('João', 21);
let person2 = new Person('Maria', 23);
let person3 = new Person('Paulo', 17);

person1.age = 31;

console.log(`${person1.name} tem ${person1.age} anos.`);
