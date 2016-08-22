// Combinator M o MockingBird
// Es utilizado para realizar recursion anonima.
// Es decir, pasar la funcion recursiva como parametro

// Definicion del combinador M
const M = a => a(a)

// Funcion que ejecuta el factorial, pasandole la funcion factorial com
// parametro, es una recursion anonima, pues no se declara el factorial
// en ninguna parte.
const makeFact = (givenFact) => (n) => {
    if (n === 1) return n;
    var theFact = M(givenFact);
    return n * theFact(n - 1);
}

// Definicion del factorial.
const fact = M(makeFact)

// Imprime 24
console.log(fact(4))
// Hace lo siguiente
// fact(4) = M(makeFact)(4) = makeFact(makeFact)(4)
// Con ello, dentro del makeFact vamos a tener:
// theFact = makeFact(makeFact), y el return 4 * makeFact(makeFact)(3)
// Y asi sucesivamente
