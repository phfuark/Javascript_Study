function calcularImovel(metragem, quartos){
    let conta = 0;
    switch(quartos){
        case 1:
            conta = metragem * 3000;
            return conta;
        break
        case 2:
            conta = metragem * (3000 * 1.2);
            return conta;
        break
        case 3:
            conta = metragem * (3000 * 1.5);
            return conta;
        break
    }
}

let metragem = 123;
let quartos = 3;

let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);