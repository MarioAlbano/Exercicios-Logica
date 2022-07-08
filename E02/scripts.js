/*Sistema de gastos familiares
Crie um objeto que possuirá 2 propriedades, ambas do tipo array;
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem e se a família está com saldo positivo ou negativo, seguido do valor do saldo*/

let gastoFamilia = ["receitasFamilia", "despesasFamilia"];

function valores(a, b) {
    gastoFamilia[0] = a;
    gastoFamilia[1] = b;

    let resultado = (a - b);
    if (resultado > 0) {
        return ("Parabéns! Sua família está com saldo positivo");
    } else {
        return ("Infelizmente sua família está com o saldo negativo");
    }

}

console.log(valores(1000, 500));
console.log(valores(10000, 500));
console.log(valores(1000, 50000));