let produtos = ['tênis', 'camisa', 'calças']

for(let n = 0; n < produtos.length; n++){
    console.log(`O n está em: ${n}`);
    console.log(`Produto: ${produtos[n]}`);
}

for(let i in produtos){
    console.log(`O i está em: ${i}`);
    console.log(`Produto: ${produtos[i]}`);
}

for (let produto of produtos){
    console.log(`Produto: ${produto}`);
}