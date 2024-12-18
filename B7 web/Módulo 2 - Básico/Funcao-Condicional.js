function maiorIdade(idade) {
    if (idade >= 18){
        return true;
    }
    else{
        return false;
    }
}

let verificacao = maiorIdade(17);

if (verificacao){
    console.log("Maior de idade!");
}
else{
    console.log("Menor de idade!");
}