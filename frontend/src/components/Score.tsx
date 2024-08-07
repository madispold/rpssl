import clsx from 'clsx';
import { Score as ScoreType } from '../types/score';
import { getGameStatus } from '../utils/score';
import { Button } from './Button';
import { memo } from 'react';

export type ScoreProps = {
  score: ScoreType;
  resetScore: () => void;
  isPlayLoading: boolean;
};

const ScoreComponent = ({ score, resetScore, isPlayLoading }: ScoreProps) => {
  const { message, color, isPlayerLeading, isComputerLeading } =
    getGameStatus(score);

  return (
    <>
      <div className='flex justify-between my-4'>
        <h3>Score</h3>
        <Button
          variant='secondary'
          onClick={resetScore}
          disabled={isPlayLoading}
        >
          {score.isWon ? 'Start a new game' : 'Reset score'}
        </Button>
      </div>
      <div className='flex sm:items-baseline items-center text-center md:flex-row flex-col gap-4'>
        <div className='flex-1 text-amber-600'>
          <div className='text-2xl'>Player</div>
          <div
            className={clsx(isPlayerLeading && 'scale-150', 'transition-all')}
          >
            {score.player}
          </div>
        </div>
        <div className='flex-1 text-2xl'>
          <div className={clsx('text-center', color)}>{message}</div>
        </div>
        <div className='flex-1 text-emerald-600'>
          <div className='text-2xl'>Computer</div>
          <div
            className={clsx(isComputerLeading && 'scale-150', 'transition-all')}
          >
            {score.computer}
          </div>
        </div>
      </div>
    </>
  );
};

export const Score = memo(ScoreComponent);
