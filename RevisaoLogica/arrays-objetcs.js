const pessoas = [{
    nome: "Tatiane",
    idade: 36

},{
    nome: "Cassio",
    idade: 46

},{
    nome: "Maria",
    idade: 60

},{
    nome: "Helen",
    idade: 20

}]

for (const property in pessoas){
    //console.log(pessoas[2].nome, pessoas[0].idade)
    console.log(`A pessoa ${pessoas[property].nome} tem a idade de ${pessoas[property].idade}`);
}

for (let i = 0; i < pessoas.length; i++){
    console.log(` Testando for:: ${pessoas[i].nome} tem a idade de ${pessoas[i].idade}`);
}

let teste = "a"
let teste1 = "a"

console.log(teste === teste1)

let b = []
let _b = []

console.log(b === _b)


