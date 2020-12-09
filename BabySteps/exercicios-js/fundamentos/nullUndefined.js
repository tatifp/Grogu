let valor // não inicializada

console.log(valor)
//console.log(valor2) // is not defined - não foi declarado a variavél


valor = null //variavél vazia, 
console.log(valor)
console.log(typeof valor)

const produto = {} //obejto é estrutura de chaves e valores
console.log(produto.preco)
console.log(produto)

produto.preco = 4.5
console.log(produto.preco)

produto.preco = undefined
console.log(produto.preco) //evite atribuir de forma explicita o undefined, deixe que a linguagem faça isso

console.log(!!produto.preco) //tranformando o valor para boolean, como é undefined os valores são false
console.log(produto)
//deletar um atributo de um objeto
delete produto.preco
console.log(`deletar o atributo preco`)
console.log(produto)

console.log(`atribuição ao valor null para preco`)
produto.preco = null //sem preço
console.log(produto)
console.log(!!produto.preco)

//para zerar o valor da variavel, utilize o null
