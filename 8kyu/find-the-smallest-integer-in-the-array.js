// ❓Description:
// Given an array of integers your solution should find the smallest integer.

// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// ❗️  
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

//  ✅

function findSmallestInt(arr) {
    let minElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
        minElement = arr[i];
        }
    }
    return minElement;
}   

console.log(findSmallestInt([78,56,232,412,228]));