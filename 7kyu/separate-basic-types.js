// // ❓Description:
// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected


 // ❗️  
// ['a', 1, 2, false, 'b']

//  ✅

function separateTypes(input) {
    const obj = {};
    for(let value of input){
        prop = typeof(value);
        if (prop in obj){
            obj[prop].push(value);
        }else {
            obj[prop] = [];
            obj[prop].push(value);
        }
    }
    return obj;
}
