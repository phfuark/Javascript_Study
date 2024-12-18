function calculoPorcentagem(x, y){
    let porcentagem = (y/x) * 100
    return porcentagem
}

let x = 20;
let y = 10;

let porcentagem = calculoPorcentagem(x, y);
console.log(`${porcentagem}% de ${x} é ${y}`);