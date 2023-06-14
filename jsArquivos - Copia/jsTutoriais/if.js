// if
const a = 10
const b = 5

if (a > b) {
    console.log("É verdadeiro")
}

// if... else if
const c = 10
const d = 5

if (c<d) {
    console.log("if: >> É verdadeiro")
} else if(c>d) {
    console.log("else if: >> É verdadeiro")
}

// else
const e = 10
const f = 5

if (e<f) {
    console.log("if: >> É verdadeiro")
} else if(e === f) {
    console.log("else if: >> É verdadeiro")
} else {
    console.log("else: >> É falso")
}

// ternario (é como se fose um if em uma linha só)
const g = 10
const h = 5

console.log(g > 8 ? "Verdadeiro" : "Falso")