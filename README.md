# Combinators en JS

Los combinators corresponden a un concepto abstracto en la programación, estas son funciones puras que actúan en otras funciones para crear nuevas funciones. Este concepto corresponde a cualquier lenguaje de programación. En particular se ejemplificará en lenguaje Javascript.

Muchas de estas funciones vienen del libro Raymond Smullyan "To Mock a Mockingbird", que contiene diversos puzles lógicos que son resueltos en base a estas (por lo mismo muchas de estas son nombradas con especies de aves, debido al fanatismo del autor).

Existen muchos combinators, por lo que se les prestará mayor atención a aquellos que son más utilizados.

## Tabla de contenido
- [Combinator B (Bluebird o Composer)](#combinator-b-bluebird-o-composer)
- [Combinator C (Cardinal o Flip)](#combinator-c-cardinal-o-flip)
- [Combinator K (Krestel)](#combinator-k-krestel)
- [Combinator S (Starling)](#combinator-s-starling)
- [Combinator T (Thrush o Tap)](#combinator-t-thrush-o-tap)
- [Combinator V (Vireo)](#combinator-v-vireo)
- [Combinator W (Warbler)](#combinator-w-warbler)
- [Combinator M (MockingBird)](#combinator-m-mockingbird)
- [Combinator L (Lark)](#combinator-l-lark)
- [Combinator Y ](#combinator-y)



## Combinator B (Bluebird o Composer)

Se utiliza para la composición de funciones

```javascript
const compose = a => b => c => a(b(c))
```

Ejemplo:

```javascript
// map the array values to x*x
const mapPow = array => array.map( x => Math.pow(x,2))

// map the array value adding one
const mapPlusOne = array => array.map( x => x + 1)

// the compose function, first execute mapPow then mapPlusOne
const mapPowPlusOne = compose(mapPlusOne)(mapPow)

// Print [ 5, 10, 37, 50, 65 ]
console.log(mapPowPlusOne([2,3,6,7,8]));
```

## Combinator C (Cardinal o Flip)

Se utiliza para invertir los parametros de una funcion con dos parametros

``` javascript
const C = a => b => c => a(c)(b)
```

Ejemplo:

``` javascript
// concat the array a with the array b
const makeConcat = a => b => a.concat(b)

// invert the params of makeConcat, i.e. concat b with a
const inverseConcat = C(makeConcat)

// Print [5,6,7,8,1,2,3,4]
console.log(inverseConcat([1,2,3,4])([5,6,7,8]))

// Print [1,2,3,4,5,6,7,8]
console.log(makeConcat([1,2,3,4])([5,6,7,8]))
```

## Combinator K (Krestel)

``` javascript
const K = x => y => x
```

Ejemplo:

``` javascript
// function that return Hello
const oneTwoThree = K(123);

// print 123
console.log(oneTwoThree(4))

// print 123
console.log(oneTwoThree([1,2,3,4,5,6,7,8]))
```

## Combinator S (Starling)

``` javascript
const S = a => b => c => a(c)(b(c))
```

Ejemplo:

``` javascript
// map the values of the array to x*x
const makeMap = a => a.map( x => Math.pow(x,2));

// concat a with b
const makeConcat = a => b => a.concat(b)

// execute the map, then concat the initial value with the result of map
const ConcatMap = S(makeConcat)(makeMap)

// print [ 2, 4, 6, 4, 16, 36 ]
console.log(ConcatMap([2,4,6]))
```

## Combinator T (Thrush o Tap)

``` javascript
const T = a => b => b(a)
```

Ejemplo:

``` javascript
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

```

## Combinator V (Vireo)

``` javascript
const V = a => b => c => c(a)(b)
```

Ejemplo:

``` javascript
// Definition of sum
const sum = a => b => a + b

// Definition of a function that recieves the objects of V
const cons =  a => b => V(a)(b)

// Print 10
console.log(cons(3)(7)(sum))
```

## Combinator W (Warbler)

``` javascript
const W = a => b => a(b)(b)
```

Ejemplo:

``` javascript
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
```


## Combinator M (MockingBird)

``` javascript
const M = a => a(a)
```

Ejemplo:

``` javascript
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
```

## Combinator L (Lark)

``` javascript
const L = a => b => a(b(b))
```

Ejemplo:

``` javascript
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

```

## Combinator Y

``` javascript
const Y = a => (b => b(b))(b => a(c => b(b)(c)))
```

Ejemplo:

``` javascript
// Factorial example

// function annonymus recursion factorial
const makeFact = (givenFact) => (n) => n<2 ? 1 : n*givenFact(n-1)

// the factorial
const fact = Y(makeFact);

// print 6
console.log(fact(3));

// Fibonacci example

// function annonymus recursion fib
const makeFib = (givenFib) => (n) => n<=2 ? 1 : givenFib(n-1) + givenFib(n-2)

// the Fibonacci
var fib = Y(makeFib);

// print 5
console.log(fib(5));


// MergeSort example

// the merge function
const merge = (left,right) => {
  var result  = [],
     il      = 0,
     ir      = 0;

 while (il < left.length && ir < right.length){
     if (left[il] < right[ir]){
         result.push(left[il++]);
     } else {
         result.push(right[ir++]);
     }
 }
 return result.concat(left.slice(il)).concat(right.slice(ir));
}


// function annonymus recursion MergeSort
const makeMergeSort = (givenMergeSort) => (items) => {

    // Terminal case: 0 or 1 item arrays don't need sorting
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left    = items.slice(0, middle),
        right   = items.slice(middle);

    return merge(givenMergeSort(left), givenMergeSort(right));
}

// the mergeSort
var mergeSort = Y(makeMergeSort);

// print [1,2,3,4,5,6]
console.log(mergeSort([2,4,1,3,6,5]));

```
