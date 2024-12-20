class Character {

    life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character{
    constructor(name, ){
        super(name);

        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character{
    constructor(name, ){
        super(name);

        this.life = 75;
        this.attack = 15;
        this.defense = 4;
        this.maxLife = this.life;
    }
}


class litteMonster extends Character{
    constructor(){
        super('Litte Mosnter');

        this.life = 40;
        this.attack = 5;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class bigMonster extends Character{
    constructor(){
        super('Big Monster');
        this.life = 125;
        this.attack = 12;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

//-----------------------------------------------------------------------------------------------------

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        this.update();

        this.fighter1El.querySelector(".attackButton").addEventListener("click", () =>
            this.attack(this.fighter1, this.fighter2)
        );

        this.fighter2El.querySelector(".attackButton").addEventListener("click", () =>
            this.attack(this.fighter2, this.fighter1)
        );
    }

    update() {
        // Fighter 1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`;
        let bar1Stats = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${bar1Stats}%`;

        // Fighter 2
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`;
        let bar2Stats = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${bar2Stats}%`;
    }

    attack(attacking, attacked) {
        console.log(`${attacking.name} está atacando ${attacked.name}`);
    }
}