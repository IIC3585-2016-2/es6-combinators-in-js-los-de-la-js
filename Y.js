// Combinator Y or Why Bird or Sage Bird
// The Y combinator is an interesting function which only works with functional languages,
// showing how recursion can still be done even without any variable or function declarations,
//  only functions and parameters.

// definition of Y Combinator
const Y = a => (b => b(b))(b => a(c => b(b)(c)))

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
