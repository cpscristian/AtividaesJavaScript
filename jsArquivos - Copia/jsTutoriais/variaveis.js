//Bloco do var
var nome  = "Danilo" //Declarando a variável
console.log(nome)

var nome = "Amorim" //Recriando a variável
console.log(nome)

nome = "Daniel Amorim" //Reatribuindo valor
console.log(nome)


//Bloco do let
function getNome(){
    let nome = 'Danilo'

    if (nome === 'Danilo') {
        let nome = 'Danilo Amorim'
        console.log('Dentro do if: ' + nome)
    }
    console.log('Fora do if: ' + nome)
}
getNome()


//Bloco do Const
const primeiroNome = "Danilo"
console.log(nome)

const nome = "Amorim"
console.log(nome)
