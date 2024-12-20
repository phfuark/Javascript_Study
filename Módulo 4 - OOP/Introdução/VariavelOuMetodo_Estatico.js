class Person {
    age =0;
    static hands = 2;

    constructor (name) {
        this.name = name    
    }

    sayHi() {
        console.log(`Oi meu nome é ${this.name} e tenho ${Person.hands} mãos.`);
    }
}

let person1 = new Person('Paulo');
person1.sayHi();
