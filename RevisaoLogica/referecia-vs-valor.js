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

function alteraArray(a){
    a.push ("adicionado")
}

let arr = ["a"]

console.log(arr)
alteraArray(arr)
console.log(arr)
let msg = "mensagem"

function alteraPrimitivo(p) {
    p += " adicionado"
    console.log("dentro da função: ", p)
}


console.log(msg)
alteraPrimitivo(msg)
console.log(msg)
