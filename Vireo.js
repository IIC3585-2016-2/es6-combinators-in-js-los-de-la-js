//Combinator V or Vireo
// is the same than tap, but with two params

// Definition of V combinator
const V = a => b => c => c(a)(b)

// Definition of sum
const sum = a => b => a + b

// Definition of a function that recieves the objects of V
const cons =  a => b => V(a)(b)

// Print 10
console.log(cons(3)(7)(sum))
