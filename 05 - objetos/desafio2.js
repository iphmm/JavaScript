class Pessoa{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso/(this.altura*this.altura);
    }

    classificarIMC(){
        if (this.calcularIMC() < 18.5) {
            return 'Abaixo do peso!';
        } else if (this.calcularIMC() < 25) {
            return 'Peso normal!';
        } else if (this.calcularIMC() < 30) {
            return 'Acima do peso!';
        } else if (this.calcularIMC() < 40) {
            return 'Obeso!';
        } else {
            return 'Obesidade Grave!';
        }
    }

    imprimir(){
        const IMC = this.calcularIMC();
        const classficacao = this.classificarIMC();
        console.log(`${this.nome}, pesa ${this.peso}KG, tem ${this.altura} de altura e seu IMC é ${IMC.toFixed(2)}, sua classificação é ${classficacao}`);
    }
}

function main(){
    const jose = new Pessoa('José', 70, 1.75);
    const paulo = new Pessoa('Paulo', 63, 1.73);
    jose.imprimir();
    paulo.imprimir();

}

main();