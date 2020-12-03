let n = "global"

function mostrarN (){
    let n = "local"
 
    console.log("Valor de n dentro da função: " + n)
}

mostrarN()
console.log("Valor da variavel global : " + n)

function fnExt(){
    let n = "n local na funcao fnEXT"

    function fnInt(){
     let n = "n local na funcao fnInt"
     console.log (n)   
    }
    fnInt()
    console.log (n)
}

fnExt()

