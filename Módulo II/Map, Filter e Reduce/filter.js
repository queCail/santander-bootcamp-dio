//Filtre e retorne todos os números pares de um array.

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numberArray.filter(function(a){
    if(a % 2 === 0){
        return a;
    }
}));

//função alternativa: arr.filter((item) => item % 2 === 0);