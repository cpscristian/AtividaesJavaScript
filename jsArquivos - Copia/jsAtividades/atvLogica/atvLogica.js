//1)
function triangulo(base,altura) {
    let area = (base * altura) / 2
    return area
}
triangulo(5,3)
console.log(triangulo(5,3))

//2)
function inverteNumero(numero){
    var inverso = 0
    while(numero != 0)
    {
        inverso = inverso * 10
        inverso = inverso + numero % 10
        numero = Math.trunc(numero/10)
    }
    return inverso
}
console.log(inverteNumero(35))

//3)
function contaVogais(texto) {
    var contador = 0;
    texto=texto.toLowerCase();
    for(var i=0; i<texto.length; i++){
        if(texto.charAt(i)=="a"||texto.charAt(i)=="e"||texto.charAt(i)=="i"||texto.charAt(i)=="o"||texto.charAt(i)==u){
            contador++; // Incrementa a contagem de vogais
        }
    }
    return contador;
}
console.log(contaVogais(saguadin))