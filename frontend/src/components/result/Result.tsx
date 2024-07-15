import clsx from 'clsx';
import { Choice } from '../../types/choice';
import { PlayResponse } from '../../types/play';
import { getParsedResult, isRotatingImage } from '../../utils/result';

export type ResultProps = {
  response: PlayResponse;
  choices: Choice[];
};

export const Result = ({ response, choices }: ResultProps) => {
  const { player, computer, resultString, playerWon, computerWon } =
    getParsedResult(response, choices);

  if (!player || !computer) {
    return <div>Something went wrong playing the game!</div>;
  }

  return (
    <div className='py-4 grid gap-4 sm:grid-cols-[1fr_150px_1fr] grid-cols-1 justify-center items-center'>
      <div className='mx-auto'>
        <img
          className={clsx(
            'max-h-[480px]',
            isRotatingImage(player.id) && '[transform:rotateY(180deg)]'
          )}
          src={`/${player.name}.svg`}
          alt={player.name}
        />
      </div>
      <div
        className={clsx(
          'text-center text-lg',
          playerWon && 'text-amber-600',
          computerWon && 'text-emerald-600'
        )}
      >
        {resultString}
      </div>
      <div className='mx-auto'>
        <img
          className='max-h-[480px]'
          src={`/${computer.name}.svg`}
          alt={computer.name}
        />
      </div>
    </div>
  );
};
