/*Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".*/

//Minha resolução:

function compareNumbers(a, b){
    const sum = a + b;

    if (a === b){
        if (sum > 10){
            if (sum < 20){
                console.log(`Os números a=${a} e b=${b} são iguais. Sua soma é ${sum}, que é maior que 10 e menor que 20.`) ;
            }else{
                console.log(`Os números a=${a} e b=${b} são iguais. Sua soma é ${sum}, que é maior que 10 e maior que 20.`) ;
            }
        }else{
            if (sum < 20){
                console.log(`Os números a=${a} e b=${b} são iguais. Sua soma é ${sum}, que é menor que 10 e menor que 20.`) ;
            }else{
                console.log(`Os números a=${a} e b=${b} são iguais. Sua soma é ${sum}, que menor que 10 e maior que 20.`) ;
            }
        }
    }else{
        if (sum > 10){
            if (sum < 20){
                console.log(`Os números a=${a} e b=${b} são diferentes. Sua soma é ${sum}, que é maior que 10 e menor que 20.`) ;
            }else{
                console.log(`Os números a=${a} e b=${b} são diferentes. Sua soma é ${sum}, que é maior que 10 e maior que 20.`) ;
            }
        }else{
            if (sum < 20){
                console.log(`Os números a=${a} e b=${b} são diferentes. Sua soma é ${sum}, que é menor que 10 e menor que 20.`) ;
            }else{
                console.log(`Os números a=${a} e b=${b} são diferentes. Sua soma é ${sum}, que menor que 10 e maior que 20.`) ;
            }
        }
    }
}

compareNumbers(5,5);

/*
Resolução da professora:

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));
*/