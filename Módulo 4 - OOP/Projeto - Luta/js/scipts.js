let log = new Log(document.querySelector('.log'));

let Char1= new Knight('Fuark');

// console.log(Char1.name);
// console.log(Char1.life);
// console.log(Char1.defense);
// console.log(Char1.attack);

let Monst1 = new bigMonster();
// console.log(Monst1.name);
// console.log(Monst1.life);
// console.log(Monst1.defense);
// console.log(Monst1.attack);



const stage = new Stage(
    Char1,
    Monst1,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();