// // ❓Description:
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Array/list will contain positives only .
// Array/list will always have even size
 // ❗️  
// minSum({5,4,2,3}) ==> return (22) 

//  ✅

function minSum(arr) {
    const arrSorted = arr.sort((a,b) => a - b);
    let sum = 0;
    for(i = 0; i < arrSorted.length / 2; i++){
        sum += arrSorted[i] * arrSorted[arrSorted.length - 1 - i]
    }

    return sum;
}

console.log(minSum([5,4,2,3]));