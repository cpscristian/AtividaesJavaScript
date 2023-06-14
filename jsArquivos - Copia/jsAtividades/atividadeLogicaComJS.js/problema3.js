/*Crie uma função que receba número de 1 a 12 e retorne o mês correspondente,
exemplo se colocar o número 2, o retorno deve ser “Fevereiro”.*/
function meses(numero) {
    switch(numero) {
        case 1:
            return "Esse é o mês de Janeiro!"
        case 2:
            return "Esse é o mês de Fevereiro!"
        case 3:
            return "Esse é o mês de Março!"
        case 4:
            return "Esse é o mês de Abril!"
        case 5:
            return "Esse é o mês de Maio!"
        case 6:
            return "Esse é o mês de Junho!"
        case 7:
            return "Esse é o mês de Julho!"
        case 8:
            return "Esse é o mês de Agosto!"
        case 9:
            return "Esse é o mês de Setembro!"
        case 10:
            return "Esse é o mês de Outubro!"
        case 11:
            return "Esse é o mês de Novembro!"
        case 12:
            return "Esse é o mês de Dezembro!"
        default: 
        return "Só existem 12 meses!"
    }
}
console.log(meses(5))