// // ❓Description:

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.
// // ❗️  
// Test.assertEquals(getAverage([2,2,2,2]),2);
// Test.assertEquals(getAverage([1,2,3,4,5,]),3);

//  ✅
function getAverage(marks){
  let sum = marks.reduce(function (accumulator, current){
    return accumulator + current;
  })
  let average = Math.floor(sum / marks.length);
  return average;
}
