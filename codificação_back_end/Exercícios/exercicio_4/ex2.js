
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



