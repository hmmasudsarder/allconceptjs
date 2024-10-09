// // // const firstArray = [3, 4, 5, 7, 5, 6];
// // // const secondArray = [4, 7];

// // // const matchedIndices = secondArray.map(item => firstArray.indexOf(item)).filter(index => index !== -1);
// // // console.log(item, index);
// // // console.log(matchedIndices);




// // const firstArray = [3, 4, 5, 7, 5, 6];
// // const secondArray = [4, 7];
// // const matchedIndices = []; 

// // for (let i = 0; i < secondArray.length; i++) {
// //   for (let x = 0; x < firstArray.length; x++) {
// //     console.log("second element", secondArray[i]);
// //     console.log("first element", firstArray[i]);
// //     if (secondArray[i] === firstArray[x]) {
// //       matchedIndices.push(x);
// //     }
// //   }
// // }

const normal = [1, 3, 2, 4, 5, 9, 6];
const matchArray = [1, 5]
let totalResult = []

for (let i = 0; i < matchArray.length; i++) {
  for (let x = 0; x < normal.length; x++) {
   if (matchArray[i] === normal[x]) {
    totalResult.push(i)
   }
  }
}
// console.log(totalResult);

function maxNumber(arr){
  let maxNum = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]> maxNum) {
      console.log(arr[i]);
    }
  }
}

const numbers = [3,21, 32, 23];
const res = maxNumber(numbers)
console.log(res);


//  const normal = [1, 3, 2, 4, 5, 9, 6];
//  const matchArray = [9];
 
// for (let i = 0; i < normal.length; i++) {
//   for (let x = +1; x < matchArray.length; x++) {
//     // console.log(matchArray[x]);
//     console.log("form normal array", normal[i]);
//   }
  
// }
// const normal = [1, 3, 2, 4, 5, 9];
// const matchArray = [9];
// // console.log(normal);
// const addded = normal[1]
// const normal[1]  [4, ...normal.slice()];
// console.log(normal);
// console.log(dublecate);
