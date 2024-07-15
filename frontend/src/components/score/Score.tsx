import clsx from 'clsx';
import { Score as ScoreType } from '../../types/score';
import { Button } from '../button/Button';

export type ScoreProps = {
  score: ScoreType;
  resetScore: () => void;
};

export const Score = ({ score, resetScore }: ScoreProps) => {
  const isPlayerLeading = score.player > score.computer;
  const isComputerLeading = score.player < score.computer;
  return (
    <div className='py-4'>
      <h2 className='text-center'>Score</h2>
      <div className='flex items-center text-center md:flex-row flex-col gap-4'>
        <div className='flex-1 text-lg text-amber-600'>
          <div>Player</div>
          <div
            className={clsx(isPlayerLeading && 'scale-150', 'transition-all')}
          >
            {score.player}
          </div>
        </div>
        <div className='flex-1'>
          <Button variant='secondary' onClick={resetScore}>
            Reset score
          </Button>
        </div>
        <div className='flex-1 text-lg text-emerald-600'>
          <div>Computer</div>
          <div
            className={clsx(isComputerLeading && 'scale-150', 'transition-all')}
          >
            {score.computer}
          </div>
        </div>
      </div>
    </div>
  );
};
