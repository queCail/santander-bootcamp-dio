/*
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

    Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
    Dentro de ContaBancaria, construa o getter e o setter de saldo;
    Dentro de ContaBancaria, crie os métodos sacar e depositar;
    Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
    Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
    Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
    Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
    Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
    Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/


class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numer = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(valor > this._saldo){
            return console.log("Operação negada.");
        }
        return this._saldo = this._saldo - valor;
    }

    depositar(valor){
        return this._saldo = this._saldo + valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente'; //alterado em relação ao enunciado para facilitar
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(limite){
        this._cartaoCredito = limite;
    }

}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitario';
    }

    sacar(valor){
        if(valor > this._saldo || valor >= 500){
            return console.log("Operação inválida.");
        }
        return this._saldo = this._saldo - valor;
    }
}