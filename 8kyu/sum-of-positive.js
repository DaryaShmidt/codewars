// // ❓Description:

// You get an array of numbers, return the sum of all of the positives ones.

// // ❗️  



//  ✅

function positiveSum(arr) {
    return arr.reduce((sum, curr) => {
        if(curr > 0){
            sum += curr;
        }
        return sum;
    }, 0)
}

