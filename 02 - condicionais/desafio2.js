const valorEtanol = 4.32; 
const valorGaslina = 6.33;
let tipoCombustivel = "etanol";
let gastoPorCarro = 10;
let distancia = 450;


if(tipoCombustivel === "gasolina"){
    valorTotal = (valorGaslina/gastoPorCarro)*distancia;
    console.log(valorTotal.toFixed(2));
}else {
    valor = (valorEtanol/gastoPorCarro)*distancia;
    console.log(valor.toFixed(2));
}