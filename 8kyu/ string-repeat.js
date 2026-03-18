// // ❓Description:
// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// // ❗️  
//  "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

//  ✅

function repeatStr (n, s) {
    let newString = '';
    for(let i = 0; i < n; i++) {
        newString += s;
    }
    return newString;
}
