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


