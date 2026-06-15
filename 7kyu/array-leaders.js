// // ❓Description:
// An element is leader if it is greater than The Sum all the elements to its right side.

// // ❗️  
// [1,2,3,4,0]), [4]


//  ✅
function arrayLeaders(numbers){
    return numbers.filter((num, index) => num > numbers.slice(index + 1).reduce((acc, curr) => acc += curr , 0))
}

console.log (arrayLeaders([16,17,4,3,5,2]))