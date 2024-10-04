function inchToConvert(inch){
    const feetInchConvert = inch / 12;
    const feetNumber = parseInt(feetInchConvert)
    const inchRemaining = inch % 12;
    const result = feetNumber+" foot "+ inchRemaining+" inch";
    return result
}

console.log(inchToConvert(74));