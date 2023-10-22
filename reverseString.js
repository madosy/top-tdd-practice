function reverseString(input) {
  const inputString = `${input}`;
  const finalString = Array.from(inputString).reduce(
    (accumulator, currentValue) => {
      return `${currentValue}${accumulator}`;
    }
  );
  return finalString;
}

export default reverseString;
