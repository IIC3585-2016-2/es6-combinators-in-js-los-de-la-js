// Combinator L or lark
// Combinator que mezcla el combinator B y M
// L = a => b => B(a)(M(b))

// M combinator
const M = a => a(a)

// Definicion del combinador L
const L = a => b => a(b(b))

// funcion recursiva anonima de recusion
const makeFact = (givenFact) => (n) => {
    if (n === 1) return n;
    var theFact = M(givenFact);
    return n * theFact(n - 1);
}

//  funcion que duplica el valor de b al ser ejecutado por a
const duplicate = a => b => 2*a(b)

// funcion que duplica el valor del factorial
const doubleFact = L(duplicate)(makeFact)

// Imprime 48
console.log(doubleFact(4))
