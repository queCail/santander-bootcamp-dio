/*
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1
 */


// Resolução da professora: verificar se o elemento do array é 0 antes de operar sobre ele
// Estudar arrow functions

function nullifyPairs(array){
    if(!array) return;
    if(array.length === 0) return console.log(-1);

    for (let i = 0; i < array.length; i++){
        if(array[i]%2 === 0){
            array[i] = 0;
        }
    }
    return console.log(array)
}

let list = [];
let list2 = [1, 3, 4, 6, 80, 33, 23, 90];

nullifyPairs(list);
nullifyPairs(list2);