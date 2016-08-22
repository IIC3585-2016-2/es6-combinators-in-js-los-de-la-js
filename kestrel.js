// Combinator K or Krestel
// Is a function that makes constant functions.
// You give it a value, and it returns a constant function that gives that value.

// Definition of K combinator
const K = x => y => x

// function that return 123
const oneTwoThree = K(123);

// print 123
console.log(oneTwoThree(4))

// print 123
console.log(oneTwoThree([1,2,3,4,5,6,7,8]))
