/*
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.
*/

function arraySet(array){
    const set = new Set(array);
    return [...set];
}

const list = [30, 30, 40, 5, 223, 2049, 3034, 5];
const set = arraySet(list);

console.log(set);