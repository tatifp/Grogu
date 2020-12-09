const valores = [7,8,9,10,11.9]

valores [10] = 50

console.log(valores[3], valores[2])
console.log(valores[11]) //undefined
console.log(valores[10])
console.log(valores.length)

//arrays pode aceitar multiplus valores
//não é uma boa prática
valores.push({id:3}, false, null, "tati")

console.log(valores)
console.log(valores.pop())
console.log(valores[1])
console.log(typeof valores) // arrays sempre serão objetc
