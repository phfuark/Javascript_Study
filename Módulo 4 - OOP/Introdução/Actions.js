class Person {
    constructor (name){
        this.name = name;
        this.steps = 0;
    }
    age = 0;

    setAge(newAge) {
        if (typeof newAge == 'number'){
            this.age = newAge;
        } else{
            console.log('Digite a idade como um número!')
        }
    }

    takeAStep() {
        this.steps++;
    }
}

let person1 = new Person('João');
let person2 = new Person('Maria');
let person3 = new Person('Paulo');

person1.setAge(31);
person1.takeAStep();

console.log(`${person1.name} tem ${person1.age} anos, e andou ${person1.steps} passos.`);
