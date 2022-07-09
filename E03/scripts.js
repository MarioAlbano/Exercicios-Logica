/*Celsius em fahrenheit

  Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra
*/
function conversorMedidasC(quantidade) {
    let valor = parseFloat(quantidade);
    let resultado = ((valor * 9 / 5) + 32);
    return `${quantidade} em Celsius é igual a ${resultado} Fahrenheit.`;
}

function conversorMedidasF(valorF) {
    let valor = parseFloat(valorF)
    let resultado = ((valor - 32) * (5 / 9));
    return `${valorF} em Fahrenheit é igual a ${resultado} Celsius.`;
}

function conversor(quantidadeValor, tipo) {
    let comparar = tipo.toLowerCase();
    if (comparar === "c") {
        let quantidade = quantidadeValor;
        console.log(conversorMedidasC(quantidade));
    }
    else if (comparar === "f") {
        let quantidade = quantidadeValor;
        console.log(conversorMedidasF(quantidade));
    }
    else if (comparar != "f" || "F" || "c" || "C") {
        console.log("Não foi possível achar identificar. Por favor, tente 'C' para Celsius ou 'F' para Fahrenheit");
    }
}

conversor("40", "c");
conversor("100", "C");
conversor("50", "F");
conversor("500", "f");
conversor("1000", "F");
conversor("500", "X");
conversor("500", "z");
conversor("1500", "C");
