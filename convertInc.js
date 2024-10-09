// Write a function that takes an array of numbers and returns the sum of all the numbers.
// Write a function that takes an array and returns the maximum number.
// Write a function that takes an array and returns a new array with the elements in reverse order.
// Write a function that checks if a given value exists in an array.
// Write a function that counts how many times a specific value appears in an array.
// Write a function that removes duplicate values from an array.
// Write a function that merges two arrays and returns the result.
// Write a function that returns a new array containing only the elements that are present in both arrays.
// Write a function that removes a specific element from an array.

// 01 // Write a function that takes an array of numbers and returns the sum of all the numbers.
// function sumOfArray(numbers){
//     let sum = 0
//     for (let i = 0; i <= numbers.length; i+=2) {
//         sum = sum + i
//     }
//     return sum
// }
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result =sumOfArray(number)
// console.log(result);


//03 Write a function that takes an array and returns a new array with the elements in reverse order.
// function takeArrayReturn(numbers){
//     let reverse = []
//     for (let i = 0; i < numbers.length; i++) {
//         let latter = numbers[i]
//         reverse.unshift(latter)
//     }
//     return reverse
// }
// const number = [1, 2, 3];
// console.log(takeArrayReturn(number));

// Write a function that removes a specific element from an array.
function removeSpecificElement(numbers, removenum){
    for(let i = 0; i < numbers.length; i++){
        for (let index = 0; index < removenum.length; index++) {
            if (numbers[i]=== removenum[i]) {
                removenum.pop()
                // console.log(removenum);
            }
            
        }
    }
}

const number = [1, 2, 3];
console.log(removeSpecificElement(number, 2));