import { playerWinningCombinations } from "../constants";
import { ChoiceType } from "../types/choice";
import { PlayResponseType } from "../types/play";

export const getPlayResult = (
  player: ChoiceType,
  computer: ChoiceType
): PlayResponseType => {
  let result: PlayResponseType = {
    results: "lose",
    player: player.id,
    computer: computer.id,
  };
  const choiceString = `${player.id}${computer.id}`;

  if (player.id === computer.id) {
    result.results = "tie";
  } else if (playerWinningCombinations.includes(choiceString)) {
    result.results = "win";
  }

  return result;
};
