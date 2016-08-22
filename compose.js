// Combinator B or Bluebird
// Named also Compose

// Definition of the B combinator (compose)
const compose = a => b => c => a(b(c))

// map the array values to x*x
const mapPow = array => array.map( x => Math.pow(x,2))

// map the array value adding one
const mapPlusOne = array => array.map( x => x + 1)

// the compose function, first execute mapPow then mapPlusOne
const mapPowPlusOne = compose(mapPlusOne)(mapPow)

// Print [ 5, 10, 37, 50, 65 ]
console.log(mapPowPlusOne([2,3,6,7,8]));
