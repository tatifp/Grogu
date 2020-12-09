console.log(typeof Object) // é uma função

class Produto {} // é uma função
console.log(typeof Produto) 

/*
Função é um trecho de codigo que eu posso fazer
chamadas para execução do código
Analogia - receita de bolo
agrupa código
*/

//defina bons nomes para seus presidentes
function imprimirSoma(a, b) {
    console.log(a+b)
}
//a e b sao aprametros de entradass

imprimirSoma(2,3)
imprimirSoma(10)// NaN, você pode tratar os parametros
imprimirSoma(10,5,5,3,3,9,4)


//Função com retorno
function soma(a, b=10) {
    return a + b
}

console.log(soma(5))
console.log(soma(5,3))