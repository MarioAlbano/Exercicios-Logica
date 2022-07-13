//Crie um algoritmo que transforme as notas do sistema numério para sistema de notas em caracteres tipo A B C;

function categorizandoNotas(notaAluno) {

    if (notaAluno >= 90) {
        return "Nota A";
    }
    else if (notaAluno >= 80 && notaAluno <= 89) {
        return "Nota B";
    }
    else if (notaAluno > 70 && notaAluno < 79) {
        return "Nota C";
    }
    else if (notaAluno > 60 && notaAluno < 69) {
        return "Nota D";
    }
    else if (notaAluno < 60) {
        return "Nota F";
    }
    else {
        return `Nota ${notaAluno} Inválida, verifique novamente por favor`;
    }
}
console.log(categorizandoNotas(100));
console.log(categorizandoNotas(89));
console.log(categorizandoNotas(61));
console.log(categorizandoNotas(0));