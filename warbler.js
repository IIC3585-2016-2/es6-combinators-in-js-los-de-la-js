// Combinator W or warbler
// Duplicate de param.

// Definition of W Combinator
const W = a => b => a(b)(b)

// Multiplication of a and b
const makeMult = a => b => a*b

// sum of a plus b
const makeAdd = a => b => a+b

// multiplication of two equal parameters b*b
const multDuplicateAdd = W(makeMult)

// this doing makeMult(makeAdd(2)(3))(makeAdd(2)(3))
// makeMult(2+3)(2+3)
// print 25
console.log(multDuplicateAdd(makeAdd(2)(3)))
