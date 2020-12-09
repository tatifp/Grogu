//Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

function imprimirSoma2 (a, b) {
    console.log(a + b)
}

imprimirSoma(36,46)
imprimirSoma2(1050,30)


//Armazenando uma funcao arrow em uma variavel
//substitui a palavra function para uma forma reduzida de escrita
const imprimirSoma3 = (a, b) => {
    console.log(a + b)
}

imprimirSoma2(55,30)

// retono implicito

const subtracao = (a,b) => console.log(a - b)

subtracao(46,36)

