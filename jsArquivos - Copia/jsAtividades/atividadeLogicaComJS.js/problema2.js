/*Crie uma função que receba a idade da pessoa e retorne a quantidade de dias, crie
uma validação para não permitir número negativo, e quando tiver retorna uma
mensagem de erro.*/
function pessoa(idade) {
    const dias = idade * 365
    if(idade<0) {
        console.log("Insira um número válido!")
    }
    else {
        console.log("Você tem "+idade+" anos de idade, que equivale a "+dias+" dias de vida")
    }
}
pessoa(16)
//pessoa(-16)