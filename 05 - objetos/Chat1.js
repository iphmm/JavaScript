class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularTotal(){
        return this.quantidade*this.preco;
    }

    exibir(){
        const total = this.calcularTotal();
        console.log(`Produto ${this.nome}, temos ${this.quantidade} und em estoque, com valor unitário de R$${this.preco}, totalizando R$${total} em estoque.`);
    }
}

function main(){
    const teclado = new Produto('Teclado', 249.9, 10);
    const mouse = new Produto('Mouse', 149.9, 20);
    teclado.exibir();
    mouse.exibir();
}

main();
