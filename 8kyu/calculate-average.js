// // ❓
// Write a function which calculates the average of the numbers in a given array.
// Note: Empty arrays should return 0.


// // // ❗️  
// tester([1,1,1], 1);
// tester([1,2,3], 2);


// // ✅
function findAverage(array) {

    if (array.length === 0) {
        return 0;
    }else{
        const sum = array.reduce((sum, curr) => {
        return sum + curr;
    })
        return sum / array.length;
    }
}

console.log(findAverage([1,1,1]));