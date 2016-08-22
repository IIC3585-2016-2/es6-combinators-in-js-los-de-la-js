// Combinator I or Idiot Bird
// Named also Indentity

// definition of I Combinator
const I = a => a

// Function Example

// return first element of array
const getFirstElement = (array) => array[0]

const first = I(getFirstElement)

// print 0
console.log(first([0,1,2,3]))


// Constant Example

// return number 4
const numberFour = I(4)

// print 4
console.log(numberFour)
