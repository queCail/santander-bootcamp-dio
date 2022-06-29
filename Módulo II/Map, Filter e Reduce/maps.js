
//Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.


const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
let number = 2;

console.log(numberArray.map((a) => a * 2));
console.log(numberArray.map(function(a){
    return a*this;
}, number));