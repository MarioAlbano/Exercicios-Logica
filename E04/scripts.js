/*Buscando e contando dados em Arrays

Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

    * Contar o número de livros em cada categoria [X]
    * Contar o número de autores [X] 
    * Mostrar livros do autor Auguto Cury []
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor. []
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//Criando variáveis que contam os livros
let BooksA = booksByCategory[0].books;
let BooksB = booksByCategory[1].books;

console.log(`Os livros do primeiro array são: ${BooksA.length} livros.`);
console.log(`Os livros do segundo array são: ${BooksB.length} livros.`);

// Contando o número de autores  




// console.log(`Os autores do primeiro array são: ${authorA.length} autores.`);
// console.log(`Os autores do segundo array são: ${authorB.length} autores.`);
function sumAuthors() {
    let sumAuthorsA = 0;
    for (i = 0; i < BooksA.length; i++) {
        let authorA = booksByCategory[0].books[i].author;
        console.log(authorA);
        sumAuthorsA++;
    }
    console.log(sumAuthorsA);

    let sumAuthorsB = 0;
    for (i = 0; i < BooksB.length; i++) {
        let authorB = booksByCategory[1].books[i].author;
        console.log(authorB);
        sumAuthorsB++;
    }
    console.log(sumAuthorsB);
}
sumAuthors();

//    * Mostrar livros do autor Auguto Cury

function selectAuthor() {
    let authorA = () => {
        
    }
}