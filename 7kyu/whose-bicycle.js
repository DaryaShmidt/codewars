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
  const diaries = {
    'firstSonAge': diary1,
    'secondSonAge': diary2,
    'thirdSonAge': diary3
  };

  for (let diary in diaries){
    diaries[diary] = Object.values(diaries[diary]).reduce((sum, curr) => sum + curr);
  }

  let max = 0;
  let son = '';
  for(let diary in diaries) {
    if (diaries[diary] > max){
      max = diaries[diary];
      son = diary;
    }else if(diaries[diary] === max){
      if (ageTable[son] > ageTable[diary]){
        son = diary;
      }
    }
  }
  const indexSon = son.indexOf('Son');

  return `I need to buy a bicycle for my ${son.slice(0, indexSon)} son.`;
}
//  let sum1 = Object.values(diary1).reduce((accum, curr) => accum += curr, 0);
//   let sum2 = Object.values(diary2).reduce((accum, curr) => accum += curr, 0);
//   let sum3 = Object.values(diary3).reduce((accum, curr) => accum += curr, 0);


console.log(whoseBicycle( 
 {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 5
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
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      })
    )
