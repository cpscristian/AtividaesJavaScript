/*Crie uma função que recebe 2 números como argumento e retorne se o primeiro é
maior ou igual ao segundo.*/
function numeros(a,b) {
    if(a<b) {
        console.log("A é menor que B!")
    } 
    else if(a==b){
        console.log("A é igual a B!")
    } 
    else {
        console.log("A é maior que B!")
    }
}
numeros(8,8)