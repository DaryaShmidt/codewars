// // ❓Description:
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).


//  // ❗️  
// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

//  ✅

    function maxTriSum(numbers){
        let sum = 0;
        for(let i = 0; i < 3; i++){
            const max = Math.max(...numbers);
            sum += max;
            numbers = numbers.filter((n) => n !== max);
        }
        return sum;
    }


