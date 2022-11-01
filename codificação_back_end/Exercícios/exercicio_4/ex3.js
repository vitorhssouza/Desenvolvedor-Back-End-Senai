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









