//----- Personagens -----

const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0  
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 120,
        maxLife: 120,
        attack: 18,
        defense: 10
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 80,
        maxLife: 80,
        attack: 25,
        defense: 8
    }
}

const createLitteMonster = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 50,
        attack: 10,
        defense: 4
    }
}

const createBigMonster = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 150,
        maxLife: 150,
        attack: 15,
        defense: 8
    }
}


//----- Cenário -----
const stage = {
    fighter1: null,
    fighter2: null,
    fighter1El: null,
    fighter2El: null,
    log: {
        messages: [],
        addMenssage(message) {
            this.messages.push(message);
            console.log(message); // Exibe a mensagem no console (pode ser alterado para exibir em outro local no DOM)
        }
    },

    start(fighter1, fighter2, fighter1El, fighter2El, logObject) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObject;

        this.update();

        this.fighter1El.querySelector(".attackButton").addEventListener("click", () =>
            this.attack(this.fighter1, this.fighter2)
        );

        this.fighter2El.querySelector(".attackButton").addEventListener("click", () =>
            this.attack(this.fighter2, this.fighter1)
        );
    },

    update() {
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(2)} HP`;
        let bar1Stats = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector(".bar").style.width = `${bar1Stats}%`;

        this.fighter1El.querySelector(".bar").style.backgroundColor =
            bar1Stats >= 50 ? '#299c14' :
            bar1Stats >= 25 ? '#f5e616' : '#F00';

        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(2)} HP`;
        let bar2Stats = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector(".bar").style.width = `${bar2Stats}%`;

        this.fighter2El.querySelector(".bar").style.backgroundColor =
            bar2Stats >= 50 ? '#299c14' :
            bar2Stats >= 25 ? '#f5e616' : '#F00';

        if (this.fighter1.life <= 0) {
            this.fighter1.life = 0;
            this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - 0 HP`;
            this.fighter1El.querySelector(".bar").style.width = `1%`;
        }

        if (this.fighter2.life <= 0) {
            this.fighter2.life = 0;o
            this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - 0 HP`;
            this.fighter2El.querySelector(".bar").style.width = `$1%`;
        }
    },

    attack(attacking, attacked) {
        if (attacked.life <= 0) {
            this.log.addMenssage(`Are you serious? don't attack the dead.`);
            return;
        } else if (attacking.life <= 0) {
            this.log.addMenssage(`${attacking.name}, oh ${attacking.name}, look at you, not even conscious and still determined to show the world what you can do...`);
            return;
        }

        let attackFactor = Math.random() * 2;
        let actualAttack = attacking.attack * attackFactor;

        let defenseFactor = Math.random() * 2;
        let actualDefense = attacked.defense * defenseFactor;

        if (actualAttack > actualDefense) {
            let damage = actualAttack - actualDefense;
            attacked.life -= damage;
            this.log.addMenssage(`${attacked.name} took ${damage.toFixed(2)} damage by ${attacking.name}`);
        } else {
            this.log.addMenssage(`${attacked.name} successfully defended the attack.`);
        }

        this.update();
    }
};

const log = {
    list: [],
    addMenssage(menssage) {
        this.list.push(menssage);
        this.render();
    },

    render() {
        const logEl = document.querySelector('.log');
        logEl.innerHTML = "";

        for (let i in this.list) {
            logEl.innerHTML += `<li>${this.list[i]}</li> <br>`;
        }
    }
};