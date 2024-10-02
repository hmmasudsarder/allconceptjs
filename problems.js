// const firstArray = [3, 4, 5, 7, 5, 6];
// const secondArray = [4, 7];

// const matchedIndices = secondArray.map(item => firstArray.indexOf(item)).filter(index => index !== -1);
// console.log(item, index);
// console.log(matchedIndices);




const firstArray = [3, 4, 5, 7, 5, 6];
const secondArray = [4, 7];
const matchedIndices = []; 

for (let i = 0; i < secondArray.length; i++) {
  for (let x = 0; x < firstArray.length; x++) {
    console.log("second element", secondArray[i]);
    console.log("first element", firstArray[i]);
    if (secondArray[i] === firstArray[x]) {
      matchedIndices.push(x);
    }
  }
}

console.log(matchedIndices);
