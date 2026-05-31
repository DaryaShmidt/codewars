// // ❓Description:
// Given a string s, your task is to return another string such that even-indexed and odd-indexed characters of s are grouped and the groups are space-separated. Even-indexed group comes as first, followed by a space, and then by the odd-indexed part.


// // ❗️  

// input:    "CodeWars" => "CdWr oeas"
//            ||||||||      |||| ||||
// indices:   01234567      0246 1357

//  ✅

function sortMyString(S) {
    let even = '';
    let odd = '';
    for (i = 0; i < S.length; i++){
        if (i % 2 === 0) {
            even += S[i];
        }else{
            odd += S[i];
        }
    }
    return even + ' ' + odd;
}

console.log(sortMyString('CodeWars'));