let peso = 63;
let altura = 1.71;
let IMC = calculoIMC(altura, peso);

if (IMC < 18.5) {
    console.log(`IMC ${IMC.toFixed(2)} - Abaixo do peso!`);
} else if (IMC < 25) {
    console.log(`IMC ${IMC.toFixed(2)} - Peso normal!`);
} else if (IMC < 30) {
    console.log(`IMC ${IMC.toFixed(2)} - Acima do peso!`);
} else if (IMC < 40) {
    console.log(`IMC ${IMC.toFixed(2)} - Obeso!`);
} else {
    console.log(`IMC ${IMC.toFixed(2)} - Obesidade Grave!`);
}

function calculoIMC(altura, peso){
    return peso / (altura * altura);
}
