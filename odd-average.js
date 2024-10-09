function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number)
            // console.log(odds);
        }
    }
    let sum = 0;
    for (const odd of odds) {
        sum = sum + odd
    }
    const lengthA = odds.length
    const avg = sum / lengthA
    return { odds, sum, lengthA, avg }
}

const numbers = [3, 2, 101, 131, 121]
const result = oddAverage(numbers)
console.log(result);