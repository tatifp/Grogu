{
    {
        {
            { var sera = 'Será????' }
        }
    }
}

function teste (){
    var local = 123 //definida dentro da função, visivel apenas para esse bloco essa funcção
}

console.log(sera)
// console.log(local) - var não definida

let numero =  5
{
    let numero = 2
    console.log('dentro = ',  numero)
}
console.log('fora = ' + numero)

//let tem um escopo a mais de validação
//que é o escopo de bloco, var é global





