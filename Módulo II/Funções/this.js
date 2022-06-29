/*
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!
*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const eu = {
    nome: "Caique",
    idade: 22.
};

let idadeCall = calculaIdade.call(eu, 10);
let idadeApply = calculaIdade.apply(eu, [10]);
let idadeBind = calculaIdade.bind(eu, 10)

console.log(idadeCall);
console.log(idadeApply);
console.log(idadeBind());

