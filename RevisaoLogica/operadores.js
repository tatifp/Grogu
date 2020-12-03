// + - / * % **

let n1 = 10;
let n2 = 5;

// operdores arimeticos
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(5 % 2)
console.log(2 ** 3)

// operadores de atribuição

let n3 = 20;
//n3 = n3 + 15;
n3 /= 2;


//incremento e decremento
console.log("incremento");
let n4 = 0;
n4++;
console.log (typeof n4, n4);
console.log("decremento");
    n4 = 0;
    --n4;
    console.log (typeof n4, n4);


    //comparação
    console.log("comparação");
    /*
    igualdade de valor ==
    igualdade de valor e tipo ===
    <, >, <=, >=
    != valores diferentes
    !== valores e tipos diferente
    */

    console.log (n1, n2, n3);
    let n5 = "10";
console.log (n1 === n5);
console.log (n1 >= 11);
console.log (n1 <= n5);
console.log (n1 != "10");
console.log (n1 !== n5);
console.log (typeof n1, typeof n5);

//operadores logicos

let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;

const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

