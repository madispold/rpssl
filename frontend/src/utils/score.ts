import { GameStatus, Score } from '../types/score';

export const getGameStatus = (score: Score): GameStatus => {
  if (score.player === score.computer) {
    return {
      message: 'Game is Tied.',
      color: 'text-slate-600',
    };
  }
  if (score.player > score.computer) {
    return {
      message: 'Player is leading!',
      color: 'text-amber-600',
      isPlayerLeading: true,
    };
  }

  return {
    message: 'Computer is leading!',
    color: 'text-emerald-600',
    isComputerLeading: true,
  };
};
