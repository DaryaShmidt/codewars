// // ❓Description:
// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

 // ❗️  
//  [[1, 1, 2, 3], 5]


//  ✅

function sumNoDuplicates(numList) {
    const sorted = numList.sort();
    let sum = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] === (sorted[i - 1]) || sorted[i] === (sorted[i + 1] )){

        }else{
            sum += sorted[i]
        }
    }
    return sum;
}

console.log(sumNoDuplicates([1, 1, 2, 3]))