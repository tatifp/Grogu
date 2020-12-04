//criar um array com numeros randomicos não repetidos

function generateRandomNumber(max){
    return parseInt(Math.random() * max)
}


let arr = []

while(arr.length < 20){
    let rnumber = generateRandomNumber(30)
    if (arr.indexOf(rnumber) < 0){
        arr.push(rnumber)
    }
    else {
            console.log(rnumber, "ja existe no array" )
        }
    }


console.log(arr)

