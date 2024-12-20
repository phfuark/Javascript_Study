let frutas = ['Maça', 'Uva', 'Banana', 'Pera'];

// let wordFruits = frutas.filter((item) =>{
//     if(item.length==4){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
let wordFruits = frutas.filter((item) =>{
    return item.length==4;
});
console.log(wordFruits)

if (frutas.includes('Uva')){
    console.log("Tem Uva sim!");
}
else{
    console.log('Não tem uva!');
}