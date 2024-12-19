// let frutas = ['Maça', 'Uva', 'Banana', 'Pera'];

// frutas.sort();
// frutas.reverse();

// console.log(frutas)

let carros =[
    {modelo: 'Fiat', ano: 2010},
    {modelo: 'Ferrari', ano: 2020},
    {modelo: 'Celta', ano: 2018},
    {modelo: 'Bmw', ano: 2022},
]

carros.sort((a, b) => {
    if (a.ano > b.ano){
        return 1;
    }
    else if (a.ano < b.ano){
        return -1;
    }
    else{
        return 0;
    }
});

console.log(carros)