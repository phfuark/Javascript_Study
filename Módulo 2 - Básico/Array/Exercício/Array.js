// 1.   Como pegar a ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;

console.log(`1. ${carros[x]}`);

// 2.   Troque ferrari por Audi
carros[1] = 'Audi'

console.log(`2. Lista com Audi: `);
console.log(carros);

// 3.   Adicione o Volvo a lista
carros.push('Volvo');
console.log(`3. Lista com Volvo: `);
console.log(carros);

// 4.   itens na lista
console.log(`4. Itens na lista: `);
console.log(carros.length);