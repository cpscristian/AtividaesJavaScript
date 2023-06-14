// funcão; é como criar um escopo para executar um determinado código
function calculo(numero) {
    return numero * numero;
}

calculo(calculo(0))

// função com retorno
function calculo(numero) {
    return numero * numero;
}

console.log(calculo(1)) // se tiver "diego" ali, dá NaN (not a number)

// Arrow function; Faz com que fique mais direta nossa declaração de função. o return é implícito
const calculo = (numero) => {
    return numero * numero;
}

console.log(calculo(2))
/* ou isso pq nao precisaria do return
const calculo = (numero) => numero * numero

console.log(calculo(2))*/