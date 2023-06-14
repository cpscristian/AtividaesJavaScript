//String, bota entre aspas duplas ou simples
const nome = "Cristian"
const turma =  "3C"
console.log("o "+nome+" está na turma "+turma)

//Number, só põe número
var idade = 17
const altura = 1.80
console.log("ele tem "+idade+" anos e "+altura+" metros de altura")

//Boolean, real ou fake
const homem = true
var menoridade = true
console.log(`É homem? ${homem}, É menor de idade? ${menoridade}`)
//ou console.log('É homem?, homem, É menor de idade?, menoridade')

//OBJECT/OBJETO, bota entre chaves
const pizza = {
    massa: "integral fininha",
    sabor: "calabresa",
    bordaRecheada: true,
    tempoPreparo: 40,
    preco: 80.99
}
console.log(pizza.bordaRecheada)

//ARRAY, bota entre colchetes
const alimentos = ["maçã","arroz","torta"]
console.log(alimentos[0])

const pecasComputador = [
    {
        nome: "teclado",
        preco: 50
    },
    {
        nome: "mouse",
        preco: 30
    }
]
console.log(pecasComputador[0].preco)