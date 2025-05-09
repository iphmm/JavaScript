let nota1 = 3;
let nota2 = 5;
let nota3 = 4;

let media = (nota1 + nota2 + nota3)/3;

if (media < 5 ){
    console.log(`media ${media}, reprovado!`)
} else if (media > 5 && media < 7){
    console.log(`media ${media}, recuperação!`)
} else{
    console.log(`media ${media}, Aprovado, Parabens!`)
}