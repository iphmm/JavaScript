class Carro {
    constructor(modelo, autonomia,){
        this.modelo = modelo;
        this.autonomia = autonomia;
    }

    calcularViagem(distancia, precoCombustivel){
        return (distancia / this.autonomia)*precoCombustivel
    }

    imprimir(distancia, precoCombustivel){
        const valorViagem = this.calcularViagem(distancia, precoCombustivel);
        console.log(`No ${this.modelo}, fica ${valorViagem.toFixed(2)}, para viajar ${distancia}KM`);
    }
}

function main(){
    const mercedes = new Carro('Mercedes', 12);
    const jeep = new Carro('Jeep Compass', 10);

    mercedes.imprimir(450, 6.23);
    jeep.imprimir(450, 6.23);
    
}

main();