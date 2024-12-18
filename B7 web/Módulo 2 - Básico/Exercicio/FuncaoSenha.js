function validar(usuario, senha){
    if (usuario == "phfuark" && senha == "123"){
        return true
    }
    else{
        return false
    }
}

let usuario = "phfuark";
let senha = "123";

let validacao = validar(usuario, senha);
if (validacao) {
    console.log(`A senha ${senha} está correta!`);
}
else {
    console.log(`A senha está incorreta!`)
}