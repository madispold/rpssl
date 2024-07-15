import { Choice } from '../types/choice';
import { PlayResponse, Result } from '../types/play';

// Scissors and Lizard
const matchingRotatingIds = [3, 4];

export const isRotatingImage = (choice: number) => {
  return matchingRotatingIds.includes(choice);
};

export const getParsedResult = (res: PlayResponse, choices: Choice[]) => {
  return {
    player: choices.find((choice) => choice.id === res.player),
    computer: choices.find((choice) => choice.id === res.computer),
    resultString: getResultString(res.results),
    playerWon: res.results === 'win',
    computerWon: res.results === 'lose',
  };
};

export const getResultString = (results: Result) => {
  if (results === 'tie') {
    return 'A tie!';
  }
  if (results === 'win') {
    return 'Player wins!';
  }

  return 'Computer wins!';
};
