let calculator = (() => {
  function add(a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Please enter valid 2 numbers");
    }

    return numA + numB;
  }
  function subtract(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Please enter valid 2 numbers");
    }

    return numA - numB;
  }
  function divide(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (numB == 0) {
      throw new Error("Cannot divide by 0");
    }
    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Please enter valid 2 numbers");
    }

    return numA / numB;
  }
  function multiply(a, b) {
    const numA = Number(a);
    const numB = Number(b);
    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Please enter valid 2 numbers");
    }

    return Number((numA * numB).toFixed(6));
  }

  return { add, subtract, divide, multiply };
})();

export default calculator;
