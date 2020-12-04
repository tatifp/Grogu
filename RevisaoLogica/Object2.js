const pessoa = {
    nome: "Tatiane",
    idade: 36,
    email: "tatifp@yahoo.com.br"
}



console.log(pessoa)
for(let prop in pessoa){
    console.log(prop) + ": "+   console.log(pessoa[prop])

}