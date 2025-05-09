class Carro {
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    valorGasto(quilometros, valorCombustivel) {
        return (quilometros / this.gastoMedio) * valorCombustivel;
    }

    imprimir(quilometros, valorCombustivel) {
        const gasto = this.valorGasto(quilometros, valorCombustivel);
        console.log(`O carro da marca ${this.marca}, da cor ${this.cor}, vai gastar R$${gasto.toFixed(2)}`);
    }
}

const mercedes = new Carro('Mercedes', 'branca', 10);

mercedes.imprimir(450, 6.23); 
