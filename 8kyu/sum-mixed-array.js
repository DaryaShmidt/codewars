// ❓Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// ❗️  
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 

//  ✅

function sumMix(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += +array[i];
    }
    return sum;
}
