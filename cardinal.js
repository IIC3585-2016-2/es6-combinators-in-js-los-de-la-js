// Combinator C or Cardinal
// Named also flip
// Used to invert the params of a function

// Definition of C combinator
const C = a => b => c => a(c)(b)

// concat the array a with the array b
const makeConcat = a => b => a.concat(b)

// invert the params of makeConcat, i.e. concat b with a
const inverseConcat = C(makeConcat)

// Print [5,6,7,8,1,2,3,4]
console.log(inverseConcat([1,2,3,4])([5,6,7,8]))

// Print [1,2,3,4,5,6,7,8]
console.log(makeConcat([1,2,3,4])([5,6,7,8]))
