const arr = new Array()
    arr [0] = "Tati"
    arr[1] = 36

console.log (typeof arr, arr)




const arr2 = new Array(true, "Tatiane", 36 , new Array(2, 4, 10))
console.log(arr2[3][2])//acessa o elemento da array dentro array
console.log(arr2[3][arr2[3].length -1])

//sintaxe literal
const arr3 = ["Cassio", 46, ["Tati", 36, false],true]
console.log(arr3[2] [arr3[2].length - 2])

arr3[4] = "novo"
arr3[arr3.length] = "novo 2"
arr3.push("push")
arr3.push("a","b","c")


console.log(arr3)


let n = 6
console.log(arr3[n])


