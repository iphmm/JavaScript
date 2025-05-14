function main(){
const number = 9;
console.log(tabuar(number).join('\n'));
}

function tabuar(number) {
    let resultado = [];
    for (let i = 0; i <= 10; i++) {
        resultado.push(`${number} X ${i} = ${number * i}`);
    }
    return resultado;
}

main();