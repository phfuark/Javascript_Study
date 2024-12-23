function createPerson(name, age) {
    return {
        name, 
        age,
        getDates() {
            return `${this.name} tem ${this.age} anos.`
        }
    }
}

let person1 = createPerson('ph', 17);

console.log(person1.getDates());