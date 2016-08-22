// Combinator T or Thrush or Tap
// passing an object and a function, return the object evaluated by the function

// Definition of T combinator
const T = a => b => b(a)

// Pow function
const makePow = a => a*a;

// Passing the object
const pow = T(2);

// print 4
console.log(pow(makePow));

// Example with arrays

// max of an array
const maxArray = a => Math.max.apply(null,a)

// min of an array
const minArray = a => Math.min.apply(null,a)


// passing the object (the array)
const array = T([4,6,3,34,8,5])

// print 3
console.log(array(minArray));

// print 34
console.log(array(maxArray));
