class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName =  lastName;
    }       
    get fullName() {
        return `${this.firstName} ${this.lastName}`   
    }
}
person1 = new Person('Paulo', 'Silva');
console.log(`${person1.fullName}`)
