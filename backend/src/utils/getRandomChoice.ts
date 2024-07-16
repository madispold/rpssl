import { predefinedChoices } from "../constants";
import { getRandomNumber } from "./getRandomNumber";

export const getRandomChoice = () => {
  const randomNum = getRandomNumber();
  return predefinedChoices[randomNum];
};
