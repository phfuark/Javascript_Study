

// function addSquare(a, b){
//     function square(x){
//         return x*x;
//     }
//     return square(a) + square(b);
// }

// console.log(addSquare(2, 4));

function addSquare(a, b){
    const square = (x) => x*x;

    return square(a) + square(b);
}

console.log(addSquare(2, 4));