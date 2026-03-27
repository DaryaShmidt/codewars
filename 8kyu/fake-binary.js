// // ❓Description:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
// // ❗️
// fakeBin('45385593107843568'), '01011110001100111')

//  ✅

function fakeBin(x){
    let newStr = '';
    for (let int of x) {
        if (int < 5){
            newStr += 0;
        }else{
            newStr +=1;
        }
    }
    return newStr;
}

console.log(fakeBin('45385593107843568'));