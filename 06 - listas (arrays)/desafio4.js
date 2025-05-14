function main(){
const min = 10;
const max = 50;
let lista = criarlista(min, max);
console.log(verficarPar(lista).join(', '));
}
function verficarPar(criarlista){
    result = [];
    for(let i =0; i < criarlista.length; i++){
        if(criarlista[i] % 2 === 0){
            result.push(criarlista[i]);
        }
    }
    return result;
}

function criarlista(min, max){
    result = [];
    let cont = min;
    while (cont <= max){
        cont++;
        result.push(cont);
    }
    return result;
}
main();