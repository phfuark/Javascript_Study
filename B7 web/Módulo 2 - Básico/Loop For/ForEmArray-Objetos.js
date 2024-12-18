let produtos = [
    {nome: 'tênis', qnt: 10},
    {nome: 'camisa', qnt: 10},
    {nome: 'calça', qnt: 10}
];


for(let n = 0; n < produtos.length; n++){
    console.log(`O n está em: ${n}`);
    console.log(`Produto: ${produtos[n].nome} - ${produtos[n].qnt}`);
}

for(let i in produtos){
    console.log(`O i está em: ${i}`);
    console.log(`Produto: ${produtos[i].nome} - ${produtos[i].qnt}`);
}

for (let produto of produtos){
    console.log(`Produto: ${produto.nome} - ${produto.qnt}`);
}
