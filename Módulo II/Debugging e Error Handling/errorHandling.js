/*
 Crie uma função que recebe um array e um número
Realize as seguintes validações
    Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
    Se o array não for do tipo 'object', lance um erro do tipo TypeError
    Se o número não for do tipo 'number', lance um erro do tipo TypeError
    Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
 */

function arraySizeGuess(array, number){
    if(!array || !number) throw new ReferenceError('ReferenceError');
    if(typeof array !== 'object' || typeof number !== 'number') throw new TypeError('TypeError');
    if(Object.keys(array).length !== number) throw new RangeError('RangeError');

    return "You got the array's size right :)"
}

function catchError(array, number){
    try{
        console.log(arraySizeGuess(array, number));
    }

    catch(e){
        if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.stack);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack)
        }

    
       /** 
        tentativa frustrada:
       switch(e){
        case e instanceof ReferenceError:
            console.log('Erro de referência!');
            console.log(e.stack);
        case e instanceof TypeError:
            console.log('Erro de tipo!');
            console.log(e.stack);
        case e instanceof RangeError:
            console.log('O tamanho do array é diferente do número digitado!');
            console.log(e.stack);
        default:
            console.log('Outro tipo de erro ocorreu!')
       }*/

    }
}

const objectArray = {
    name : 'caique',
    age : 22,
}

const listArray = [1,2,3,4,5,6,7,8]

const sizeGuess = new Number(3);

catchError('a', 3);