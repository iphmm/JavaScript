function main(){
const nomes = [
  "Victor",
  "Ana",
  "Vinícius",
  "Beatriz",
  "Vanessa",
  "Lucas",
  "Valentina",
  "João",
  "Vitor",
  "Mariana"
];
console.log(verificarInicial(nomes).join(', '));
}

function verificarInicial(nomes){
    let comV = [];
    for(let i = 0; i < nomes.length; i++){
        if(nomes[i][0] === 'V'){
            comV.push(nomes[i]);
        }
    }
    return comV;
}
main();