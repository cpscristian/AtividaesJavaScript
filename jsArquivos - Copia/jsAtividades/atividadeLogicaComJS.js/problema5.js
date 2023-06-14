/*Escreva uma função que recebe dois números inteiros não negativos e realize a
multiplicação deles. Porém não pode utilizar o operador de multiplicação.*/
function continha(a,b) {
    const valorA = a
    for(let i = 1; i<b; i++) {
        a += valorA
    }
    return a
}
console.log(continha(8,9))