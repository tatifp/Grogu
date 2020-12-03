//operadores logicos

let idade = 12;
let paisPresentes = false;
let comprouBilhete = true;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

if (!comprouBilhete){
    console.log("Não comprou o bilhete");
} else {
    console.log("Sim comprou o bilhete");
         
    if(idade >= 18){
        console.log("Maior de 18 anos");
    } else {
        console.log("Menor de idade");
    }
}

/*
let msgMaiorIdade = "";
if(idade >= 18){
    msgMaiorIdade = `${idade}, é maior de 18 anos`
} else {
    msgMaiorIdade = `${idade},é menor de 18 anos`
}
*/

console.log("teste de idade")

let msgMaiorIdade = (idade >= 18) ? `${idade}, é maior de 18 anos` : `${idade}, é menor de 18 anos`
console.log(msgMaiorIdade)



let n1 = 3
let n2 = 8

let media = (n1 + n2) / 2;

if (n1 === 0 || n2 === 0){
    console.log ("Aluno Reprovado");
} else if (media < 7) {
    console.log ("reprovado e há como recuperar")
} else {
    console.log ("Aprovado")
}

console.log ("saiu do if")
if (media >= 7) {
    console.log(`Média ${media}, aluno aprovado!`)
    
 } else {
        console.log(`Média ${media}, aluno reprovado!`)
    }
   













