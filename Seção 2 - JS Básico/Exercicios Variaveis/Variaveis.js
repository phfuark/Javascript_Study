let varA ="A"; //B
let varB ="B"; //C
let varC ="C"; //A

//método 1
const armazena = varA;

varA = varB;
varB = varC;
varC = armazena;


// método 2
//[varA, varB, varC] = [varB, varC, varA]; 

console.log(varA, varB, varC);