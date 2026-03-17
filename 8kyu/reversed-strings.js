// // ❓Description:
// Complete the solution so that it reverses the string passed into it.
// // ❗️  
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
//  ✅

function solution(str){
    let array = [...str];
    let newArray =[];
    for(let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray.join('');
}
