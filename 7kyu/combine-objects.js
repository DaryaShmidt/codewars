// // ❓Description:

// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// // ❗️  
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
// Returns { a: 13, b: 20, c: 36, d: 3 }

//  ✅

function combine(...objects) {
    const newObj = {};
    for (let obj of objects){
        for(let key in obj){
            if(key in newObj){
                newObj[key] += obj[key];
            } else {
                newObj[key] = obj[key];
            }     
        }
    }
    return newObj;
}

console.log(combine(objA, objB));