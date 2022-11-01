// Exercício 4 

// Exercícios aula 4 

/* 1 -  Crie uma classe que simula uma conta no banco (utilize a forma que preferir);
• Deve conter a propriedade saldo;
• E os métodos deposito e saque;
• Teste os métodos;

// Resolução 

class Banco {
    constructor(saldo){
        this.saldo = saldo;
    }

    saldo(){
        return this.saldo
    }

    deposito(valor){
        return this.saldo +=  valor
    }

    saque(valor){
        if (this.saldo >= valor){
            return this.saldo -= valor;
        }else {
            return `Você não tem saldo o suficiente para sacar esse valor. Seu saldo atual é: R$${this.saldo} `
        }
    }
}

let vitor = new Banco(15000)

console.log(`Seu saldo atual é: R${vitor.saldo}`)
console.log(`Com o deposito seu saldo é R$${vitor.deposito(2000)}`)
console.log(`Com o saque seu saldo é: R$${vitor.saque(1000)}`)

*/


/* 2 - • Cria uma classe que simula um carrinho de compras de um e-
commerce;

• Propriedades itens, quantidade total, valor total;
• Crie os métodos para adicionar e remover itens;

// Resolução 


class Carrinho {
    constructor(){
        this.itens = [];
        this.quantTotal = 0;
        this.valorTotal = 0;
    }


    setAdicionar(item, quant, preco){
        let verificar;
        let posicao;

        for(let c = 0; c < this.itens.length; c += 1){
            if (this.itens[c].nome.includes(item)){
                verificar = true;
                posicao = c;
                c += 1
            } else {
                verificar = false;
                c += 1; 
            }
        }

        if (verificar != true){
            this.itens.push({
                nome: item,
                quantidade: quant,
                valor: (preco * quant)
            })
        }else {
            this.itens[posicao].quantidade += quant;
            this.itens[posicao].valor = preco * this.itens[posicao].quantidade
        }
    }

    setRemover(item, quant){
        
        for (let i in this.itens){
            if (this.itens[i].nome == item){
                this.itens[i].valor = this.itens[i].valor - ((this.itens[i].valor / this.itens[i].quantidade) * quant);
                this.itens[i].quantidade -= quant;
                if (this.itens[i].quantidade <= 0){
                     this.itens.splice(i, 1)
                 }
             } 
             
        }
    }

    get valor_total(){
        let soma = 0;
        for (let preco in this.itens){
            soma += this.itens[preco].valor;
        }
        return soma;
    }

    get quantidadeTotal(){
        let soma = 0;
        for (let quant in this.itens){
            soma += this.itens[quant].quantidade;
        }
        return soma;

    }

    get carrinho(){
        for(let i in this.itens){
            console.log(this.itens[i]);
        }
    }
  
    
    get total(){
        return `Quantidade: ${this.quantidadeTotal} -- Valor Total R$${this.valor_total}`;
    }
        
}

let compras = new Carrinho();

compras.setAdicionar('PS5', 1, 2000);
compras.setAdicionar('Xbox', 1, 1000);
compras.setAdicionar('PS5', 1, 2000);
compras.setAdicionar('PS5', 1, 2000);
compras.setAdicionar('Caneta', 1, 2);
compras.setAdicionar('Livro', 1, 20);

// metodo carrinho onde imprime os itens 
compras.carrinho

// método que imprime a quantidade e o valor total das compras 
console.log(compras.total);


console.log('Removendo');

//compras.setRemover("PS5", 3);
//compras.setRemover("Livro", 1);
compras.setRemover("Caneta", 1);
console.log('\n')
compras.carrinho
console.log(compras.total);

*/

/* 3 -  Crie um objeto que simula um endereço de um cliente;
Propriedades: Rua, Bairro, Cidade e Estado;
No construtor o endereço já deve ser definido por completo;
Crie métodos para atualizar todas as propriedades.

// Resolução 

class Endereco {

    constructor(rua, numero, bairro, cidade, estado){
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }


    // Método que retorna uma string conténdo os dados da classe
    get stringEndereco(){
        return `Rua: ${this.rua} número: ${this.numero}, bairro: ${this.bairro}, cidade: ${this.cidade} e estado: ${this.estado}`
    }

    // Método que resgata o valor da rua
    get verRua(){
         return this.rua;
    }

    // Método que atualizada apenas a rua
    atualizarRua(valor){
        this.rua = valor;
    }

    // Método que resgata o valor do número
    get verNumero(){
        return this.numero;
    }

    // Método que atualizada apenas o número
    atualizarNumero(valor){
        this.numero = valor;
    }

    // Método que resgata o valor do bairro
    get verBairro(){
        return this.bairro;
    }

    // Método que atualizada apenas o bairro
    atualizarBairro(valor){
        this.bairro = valor;
    }

    // Método que resgata o valor da cidade
    get verCidade(){
        return this.cidade;
    }

    // Método que atualizada apenas a cidade
    atualizarCidade(valor){
        this.cidade = valor;
    }

    // Método que resgata o valor do estado
    get verEstado(){
        return this.estado;
    }

    // Método que atualizada apenas o estado
    atualizarEstado(valor){
        this.estado = valor;
    }


    // Método que atualizar todo o endereço
    setAtualizarEndereco(rua, numero, bairro, cidade, estado){
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
}

let endereco1 = new Endereco('Rua A', 12, 'Santa Clara', 'Cataguases', 'MG');
console.log(endereco1.stringEndereco);

console.log('\n')

// Atualizando rua 
endereco1.atualizarRua('Rua B')
console.log('Rua atualizada')
console.log(endereco1.verRua)
console.log('\n')

// Atualizando numero 
endereco1.atualizarNumero(13)
console.log('Número atualizado')
console.log(endereco1.verNumero)
console.log('\n')

// Atualizando bairro 
endereco1.atualizarBairro('São Pedro')
console.log('Bairro atualizado')
console.log(endereco1.verBairro)
console.log('\n')


// Atualizando cidade 
endereco1.atualizarCidade('Juiz de Fora')
console.log('Cidade atualizada')
console.log(endereco1.verCidade)
console.log('\n')

// Atualizando estado
endereco1.atualizarEstado('MG')
console.log('Estado atualizado')
console.log(endereco1.verEstado)
console.log('\n')

console.log(endereco1.stringEndereco)


*/

/* 4 - 
Crie uma classe que simule um carro;
Propriedades: marca, cor, gasolina restante;
Crie um método de dirigir o carro, que vá diminuindo a
gasolina gradativamente;
E um de abastecer para aumentar a gasolina quando
necessário.

// Resolução 

class Carro {
    constructor(marca, modelo, cor, listrosCombustivel, combustivelTotal){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.listrosCombustivel = listrosCombustivel;
        this.combustivelTotal = combustivelTotal;
    }

    get stringCarro(){
        return `Marca: ${this.marca}, modelo: ${this.modelo}, cor: ${this.cor} e total de combustível: ${this.listrosCombustivel}`;
    }

    get verMarca(){
        return this.marca;
    }

    get verModelo(){
        return this.modelo;
    }

    get verCor(){
        return this.cor;
    }

    get verCombustivel(){
        return this.listrosCombustivel;
    }

    get verCombustivelTotal(){
        return this.combustivelTotal;
    }

    // Método que faz a diminuição do combustível gradativamente
    dirigir(valor){
        if (this.listrosCombustivel > valor){
            let total = this.listrosCombustivel - valor;
            for(let i = this.listrosCombustivel; this.listrosCombustivel > total; i -= 1){
                console.log('Consumindo: ', i);
                this.listrosCombustivel -= 1;
            }
            console.log(`Seu carro encontra-se com ${total} litros`);
        }else if (valor >= this.listrosCombustivel){
            let total = this.listrosCombustivel - valor;
            if (total <= 0){
                for(let i = this.listrosCombustivel; this.listrosCombustivel >= 0; i -=1){
                    console.log('Consumindo: ', i);
                    this.listrosCombustivel -= 1;
                }
            }
            console.log('você está sem combustível') ; 
        }
    }

    abastecerCarro(litros){
        if (litros > 0 && (litros + this.listrosCombustivel) > this.combustivelTotal){
            this.listrosCombustivel = this.combustivelTotal;
            return `Abasteci até completar o tanque.`;
        } else {
            this.listrosCombustivel += litros;
            return `Combustível: ${this.listrosCombustivel}`;
        }
    
    }
}

let toro = new Carro('Fiat', 'Toró', 'Preta', 70, 100);

console.log(toro.stringCarro);

//console.log(toro.abastecerCarro(100));

//console.log('\n');

toro.dirigir(5);

*/

/* 5 -Crie uma classe conta bancária;

Com as propriedades de saldo na conta corrente, saldo na
conta poupança e juros da poupança;

Crie os métodos de depósito e saque, também um método
para transferir dinheiro da poupança para a corrente;

Além disso crie uma conta especial que herda da conta
normal;

Na conta especial os juros são dobrados da conta normal.

// Resolução */

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

































