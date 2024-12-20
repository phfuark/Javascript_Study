class Person {
    constructor (name) {
        this.name = name;
    } 
}     

class Student extends Person{
    constructor(name, id) {
        super(name);
        this.id =id
    }
}

student1 = new Student('Paulo', 7);

console.log(`${student1.name} ${student1.id}`); 