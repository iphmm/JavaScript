function calcularPrecoFinal(valorProduto, formaPagamento) {
    let precoFinal;

    switch (formaPagamento) {
        case 1: 
            precoFinal = valorProduto * 0.90;
            break;
        case 2: 
            precoFinal = valorProduto * 0.85;
            break;
        case 3: 
            precoFinal = valorProduto;
            break;
        case 4: 
            precoFinal = valorProduto * 1.10;
            break;
        default:
            return "Forma de pagamento inválida!";
    }

    return `Valor final a pagar: R$ ${precoFinal.toFixed(2)}`;
}
let precoEtiqueta = 100;
let codigoPagamento = 2; // Dinheiro ou PIX
console.log(calcularPrecoFinal(precoEtiqueta, codigoPagamento));
