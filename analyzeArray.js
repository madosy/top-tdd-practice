export default function analyzeArray(numberArray) {
  return {
    average: numberArray.reduce((prev, cur) => prev + cur) / numberArray.length,
    length: numberArray.length,
    max: Math.max(...numberArray),
    min: Math.min(...numberArray),
  };
}
