const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 3.7

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.0
const avaliacao2 = 5.999

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('A média é ' + media.toFixed(2))
console.log(media)

if (media.toFixed(2) >= 7) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno reprovado")

}