import { predefinedChoices } from "../constants";

/** Get random number between 0 - 4 */
export const getRandomNumber = () => {
  return Math.floor(Math.random() * 5);
};

export const getRandomChoice = () => {
  const randomNum = getRandomNumber();
  return predefinedChoices[randomNum];
};
