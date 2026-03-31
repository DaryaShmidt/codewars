// // ❓Description:
// For this kata you will have to forget how to add two numbers.

// It can be best explained using the following meme:

// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.




// // ❗️  
    // assert.strictEqual(add(2, 11), 13);
    // assert.strictEqual(add(0, 1), 1);

//  ✅

function add(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();

    let newNum;
    let sum = '';

    if (num1.length >= num2.length){
        newNum = num1
    }else{
        newNum = num2;
    }

    for (let i = newNum.length; i > 0; i--) {
        let d1 = num1[num1.length - i] || '0';
        let d2 = num2[num2.length - i] || '0';
        let curr = +d1 + +d2;
        sum += curr;
    }
    return +sum;
}
