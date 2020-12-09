const prod1 = {} //chaves é um objeto 
const prod10 = [] //conchetes é um array


prod1.nome = "Hidratante preventivo de estrias MMBB"
prod1.preco = 66.90
prod1['Desconto legal'] = 0.45

console.log(prod1)

const prod2 = {
    nome: `Água de colônia flor de laranjeira`,
    preco: 39.90,
    desc: 0.45,
    obj: {
        prop1: 5
    }
}

//exemplo de Json é um formato textual
//objeto é uma coleção de chaves e valores

/* exemplo de Json
{
    "nome":"camisa polo"
}
*/
console.log(prod2)

const a = {name: 'Teste'}

console.log(a)

const b = a 
console.log(b)
b.name = 'Opa'
console.log(b) // b armazena o mesmo endereço do objeto da memória que a
                // devido a instrução b = a / atriabuição por referência 

console.log(a)

//Para tipos primitivos eu faço a cópia do valor
//atribuição do valor
let d = 4
let e = d
d++
console.log(d)
console.log(e) // b armazena o mesmo endereço do objeto da memória que a
                // devido a instrução b = a / atriabuição por referência 






