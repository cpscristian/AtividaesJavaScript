const local = "cinema"
switch (local){ //Responsável por ouvir a variável que vamos trabalhar
    case "cinema": //Verifica a igualdade passada no switch
        console.log("Entrou no cinema!")
        break
        case "quarto":
            console.log("Entrou no quarto!")
            case "sala":
                console.log("Entrou na sala!")
                break
                default:
                    console.log("qualquer valor diferente dos cases acima")
                    break
}