import { ChoiceType } from "./types/choice";

export const predefinedChoices: ChoiceType[] = [
  {
    id: 1,
    name: "rock",
  },
  {
    id: 2,
    name: "paper",
  },
  {
    id: 3,
    name: "scissors",
  },
  {
    id: 4,
    name: "lizard",
  },
  {
    id: 5,
    name: "spock",
  },
];

/**
 * ChoiceId pairs: ${player}${computer}
 */
export const playerWinningCombinations = [
  "32",
  "21",
  "14",
  "45",
  "53",
  "34",
  "42",
  "25",
  "51",
  "13",
];
