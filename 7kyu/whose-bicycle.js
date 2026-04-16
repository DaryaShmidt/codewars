// // ❓Description:
// I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

// You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
 // ❗️  
// {
//   'algebra': 6,
//   'history': 8,
//   'physics': 9,
//   'geography': 2,
//   'chemistry': 9
// }

//  ✅

ageTable = {
            'firstSonAge': 14,
            'secondSonAge': 9,
            'thirdSonAge': 8
           }


function whoseBicycle(diary1, diary2, diary3) {
  const diaries = [diary1, diary2, diary3];
  const sumsOfMarks = [];
  for (let diary of diaries) {
    const sum = Object.values(diary).reduce((accum, curr) => accum += curr, 0);
    sumsOfMarks.push(sum);
  }

  let maxSum = 0;
  let index = [];
  for (let i = 0; i <= sumsOfMarks.length; i++){
    if (sumsOfMarks[i] >= maxSum) {
      maxSum = sumsOfMarks[i]
      index.push(i);
    } 
  }

  const agesOfSuns = Object.values(ageTable);
  if (index.length > 1) {
    let maxAge = 0;
    let sun;
    for (let value of index){
      if(agesOfSuns[value] > maxAge) {
        maxAge = agesOfSuns[value];
        sun = value;
      }

    }

  }


  return agesOfSuns;


  

}
//  let sum1 = Object.values(diary1).reduce((accum, curr) => accum += curr, 0);
//   let sum2 = Object.values(diary2).reduce((accum, curr) => accum += curr, 0);
//   let sum3 = Object.values(diary3).reduce((accum, curr) => accum += curr, 0);


console.log(whoseBicycle( {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
      }));