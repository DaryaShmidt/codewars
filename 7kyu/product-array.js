// // ❓Description:
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

 // ❗️  

// [3, 27, 4, 2]), [216, 24, 162, 324]

//  ✅

function productArray(numbers){
  return numbers.map(num => numbers.reduce((a,b) => a * b) / num)
}

console.log(productArray([3, 27, 4, 2]));