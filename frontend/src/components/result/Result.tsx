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
    <div className='py-4 grid gap-4 sm:grid-cols-[1fr_225px_1fr] grid-cols-1 justify-center'>
      <div className='mx-auto'>
        <img
          className={clsx(
            'max-h-[320px]',
            isRotatingImage(player.id) && '[transform:rotateY(180deg)]'
          )}
          src={`/${player.name}.svg`}
          alt={player.name}
        />
      </div>
      <div className='text-center text-lg mt-8'>
        <div>
          <span className='text-center italic capitalize'>{player.name}</span>
          <span>&nbsp;VS&nbsp;</span>
          <span className='text-center italic capitalize'>{computer.name}</span>
        </div>
        <div
          className={clsx(
            playerWon && 'text-amber-600',
            computerWon && 'text-emerald-600'
          )}
        >
          {resultString}
        </div>
      </div>
      <div className='mx-auto'>
        <img
          className='max-h-[320px]'
          src={`/${computer.name}.svg`}
          alt={computer.name}
        />
      </div>
    </div>
  );
};
