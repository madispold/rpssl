export type Score = {
  player: number;
  computer: number;
};

export type GameStatus = {
  message: string;
  color: string;
  isPlayerLeading?: boolean;
  isComputerLeading?: boolean;
};
