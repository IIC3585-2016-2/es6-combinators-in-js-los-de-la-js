// S combinator or Starling
// Named also secuential
// Execute first b(c) then the result is passed as second param to a

// Definition of S combinator
const S = a => b => c => a(c)(b(c))

// map the values of the array to x*x
const makeMap = a => a.map( x => Math.pow(x,2));

// concat a with b
const makeConcat = a => b => a.concat(b)

// execute the map, then concat the initial value with the result of map
const ConcatMap = S(makeConcat)(makeMap)

// print [ 2, 4, 6, 4, 16, 36 ]
console.log(ConcatMap([2,4,6]))
