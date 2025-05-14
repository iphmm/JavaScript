function main(){
const lista = [24, 87, 3, 56, 12, 28, 96];
console.log(percorrer(lista).join(', '));
}

function percorrer(lista){
    let resultado = [];
    for(let i = 0; i < lista.length; i++){
        if(lista[i] % 2 === 0){
            resultado.push(lista[i]);
        }
    }
    return resultado;
}
main();