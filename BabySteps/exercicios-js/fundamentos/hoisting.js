//içamento hoisting a declaração var foi para primeira execução

console.log('a = ', a)
var a = 2 
console.log('a2 = ', a)


//quando utilizado o let, não ocorre o hoisting
console.log('b = ', b)
let b = 4 
console.log('b2 = ', b)


