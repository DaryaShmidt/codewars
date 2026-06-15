// // ❓Description:
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// // ❗️  
// [13,10,2,9,5]),4

//  ✅
function maxGap (numbers){
    let result = numbers.sort((a, b) => b - a).slice(0, numbers.length - 1).map((num, index) => num - numbers[index + 1]);
    return Math.max(...result);
}

console.log(maxGap([-3,-27,-4,-2]));