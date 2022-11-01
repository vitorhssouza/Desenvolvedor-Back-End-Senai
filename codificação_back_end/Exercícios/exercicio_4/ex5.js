/* 5 -Crie uma classe conta bancária;

Com as propriedades de saldo na conta corrente, saldo na
conta poupança e juros da poupança;

Crie os métodos de depósito e saque, também um método
para transferir dinheiro da poupança para a corrente;

Além disso crie uma conta especial que herda da conta
normal;

Na conta especial os juros são dobrados da conta normal.

// Resolução

class Bancaria {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    stringBancaria(){
        console.log(`
Saldo na conta corrente: ${this.saldoCorrente},
Saldo na conta poupança: R$${this.saldoPoupanca},
Juros poupança ${this.jurosPoupanca}%`);
    }

    get poupanca(){
        return this.saldoPoupanca;
    }

    get corrente(){
        return this.saldoCorrente;
    }

    get juros(){
        return this.jurosPoupanca;
    }

    depositoPoupanca(valor){
        this.saldoPoupanca += valor;
    }

    

    saquePoupanca(valor){
        this.saldoPoupanca -= valor;
    }

    transferir(valor){
        this.saldoPoupanca -= valor;
        this.saldoCorrente += valor;
    }


}


class ContaEspecial extends Bancaria{
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca){
        super(saldoCorrente, saldoPoupanca, jurosPoupanca);
    }

    get jurosEspecial(){
        return this.jurosPoupanca * 2;
    }

}


let banco1 = new Bancaria(200, 300, 5);

banco1.stringBancaria();

// Chamando o método depositoPoupanca para acrescentar o valor abaixo
banco1.depositoPoupanca(100);
console.log(`Depositando na conta poupança: R$${banco1.poupanca}`);

// chamando o método saquePoupança para retirada do valor abaixo
banco1.saquePoupanca(150);
console.log(`Saque na conta poupança R$${banco1.poupanca}`);

// Chamando o método transferir para transferir o valor abaixo da poupanca para corrente
banco1.transferir(100)
console.log('Realizando a transferencia da poupança para corrente');
console.log(`Conta poupança R$${banco1.poupanca}`);
console.log(`Conta corrente R$${banco1.corrente}`);

// Instanciando novo objeto com a classe filha
let banco2 = new ContaEspecial(100, 500, 2);

// Printando o objeto banco2 com o juro dobrado da classe ContaEspecial
console.log(`O juro da conta especial é de: ${banco2.jurosEspecial}%`);

*/


