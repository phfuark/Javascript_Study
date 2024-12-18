let ingredientes = [
    'bolo',
    'farinha',
    'ovo',
    'oleo'
];

ingredientes.push('açucar');
ingredientes.pop(ingredientes); //final
ingredientes.shift(ingredientes); //início

console.log(`Total de ingrediente: ${ingredientes.length}`);