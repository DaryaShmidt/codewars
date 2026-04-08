// // ❓Description:
// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

// // ❗️  
// find_missing([1, 2, 2, 3], [1, 2, 3]) => 2

//  ✅

function findMissing(arr1, arr2) {
    const newArr1 = arr1.sort();
    const newArr2 = arr2.sort();

    for (let i = 0; i < newArr1.length; i++) {
        if (newArr1[i] !== newArr2[i]) {
            return newArr1[i];
        }
    }
}
