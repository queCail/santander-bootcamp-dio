/*
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
*/
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];
const prices = [5, 10, 12, 35];
const initialBalance = 100;

//a = previousValue e b = currentValue
console.log(numberArray.reduce((a, b) => a + b)); 

//a = previousValue e b = currentValue (o valor inicial é considerado como o primeiro valo de previousValue)
console.log(`Saldo após as compras: R$${prices.reduce((a, b) => a-b, initialBalance)}`);