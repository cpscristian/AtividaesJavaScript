/*Escreva uma função que recebe um valor booleano ou numérico. Se o parâmetro
fornecido for booleano, o retorno deve ser o inverso.Por exemplo, se a entrada for
false, retorna true. Se o parâmetro for numérico, o retorno deve ser o número
inverso. Exemplo: se fornecer 1, o retorno deve ser -1. Se o parâmetro de entrada
não for de nenhum dos tipos, retorna “Booelano ou Número esperados, mas o
parâmetro é do tipo (tipo do parâmetro).*/
function numOuBool(valor) {
    switch(valor) {
        case true:
            return false
        case false:
            return true
    }
    if(valor<0 || valor>0) {
        valor = valor * (-1)
    }
    return valor
}
console.log(numOuBool(13))