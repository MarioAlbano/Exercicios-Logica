/*Sistema de gastos familiares
Crie um objeto que possuirá 2 propriedades, ambas do tipo array;
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem e se a família está com saldo positivo ou negativo, seguido do valor do saldo*/

// let gastoFamilia = ["receitasFamilia", "despesasFamilia"];

let receitaEntrada = [900, 900, 1400, 700, 2000];
let receitaSaida = [2000, 1500, 400, 400, 100, 50, 500, 10];


let somaEntrada = 0;
for (let i = 0; i < receitaEntrada.length; i++) {
    somaEntrada += receitaEntrada[i];
    console.log(somaEntrada);
}

let somaSaida = 0;
for (let i = 0; i < receitaSaida.length; i++) {
    somaSaida += receitaSaida[i];
    console.log(somaSaida);
}


function valores(a, b) {

    let resultado = (a - b);
    if (resultado > 0) {
        return ("Parabéns! Sua família está com saldo positivo");
    } else {
        return ("Infelizmente sua família está com o saldo negativo");
    }

}

console.log(valores(somaEntrada, somaSaida));