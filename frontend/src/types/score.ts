export type Score = {
  player: number;
  computer: number;
  isWon: boolean;
};

export type GameStatus = {
  message: string;
  color: string;
  isPlayerLeading?: boolean;
  isComputerLeading?: boolean;
};
