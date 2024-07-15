export type Result = 'win' | 'lose' | 'tie';

export type PlayResponse = {
  results: Result;
  player: number;
  computer: number;
};
