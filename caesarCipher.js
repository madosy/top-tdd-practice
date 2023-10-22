export default function caesarCipher(input, shiftFactor) {
  let inputArray = Array.from(input);
  let charCodeArray = inputArray.map((x) => getNewCharCode(x, shiftFactor));
  const finalString = String.fromCharCode(...charCodeArray);
  return finalString;

  function getNewCharCode(char, shiftFactor) {
    const charCode = char.charCodeAt(0);
    let textCase = "lower";
    if (charCode >= 97 && charCode <= 122) {
      textCase = "lower";
    } else if (charCode >= 65 && charCode <= 90) {
      textCase = "upper";
    } else {
      return charCode;
    }

    let newCharCode = charCode + shiftFactor;
    if (textCase === "lower" && newCharCode > 122) {
      newCharCode = (newCharCode % 123) + 97;
    }
    if (textCase === "upper" && newCharCode > 90) {
      newCharCode = (newCharCode % 91) + 65;
    }
    return newCharCode;
  }
}
