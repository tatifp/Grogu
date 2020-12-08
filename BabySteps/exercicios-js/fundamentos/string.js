const nome = "Tatiane Ferreira Primo"

console.log(nome.length)
console.log(nome.charAt(19))
console.log(nome.charCodeAt(19))  //tabela ascii
console.log(nome.indexOf('a'))
console.log(nome.substring(3))
console.log(nome.substring(0, 4))


console.log(`Nome:` .concat(nome).concat(" Apelido: ").concat(nome.substring(0,4)))
console.log(nome.replace(/\a/g, "@")) // g é global
console.log('Tati,Maria,Cassio,vida'.split(','))


