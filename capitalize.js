import { user } from "firebase-functions/v1/auth";

export default function capitalize(userInput) {
  if (!isNaN(userInput)) throw new Error("This is not a string");
  let lowerCaseInput = userInput.toLowerCase();
  let firstLetterIndex = lowerCaseInput.search(/[a-zA-Z]/g);

  return (
    userInput.substring(0, firstLetterIndex) +
    userInput.charAt(firstLetterIndex).toUpperCase() +
    lowerCaseInput.slice(firstLetterIndex + 1)
  );
}
