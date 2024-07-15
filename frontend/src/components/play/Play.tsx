import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Choice } from '../../types/choice';
import { PlayResponse } from '../../types/play';
import { Button } from '../button/Button';
import { Result } from '../result/Result';
import { Score } from '../score/Score';
import { Score as ScoreType } from '../../types/score';

export const Play = () => {
  const {
    isLoading: isChoicesLoading,
    error: choicesError,
    response: choices,
  } = useFetch<Choice[]>({ method: 'GET', url: 'choices', initialize: true });

  const {
    isLoading: isPlayLoading,
    error: playError,
    response: playResponse,
    request: play,
  } = useFetch<PlayResponse>({
    method: 'POST',
    url: 'play',
    onSuccess: (response) => {
      updateScore(response);
    },
  });

  const [score, setScore] = useState<ScoreType>({
    player: 0,
    computer: 0,
  });

  const updateScore = ({ results }: PlayResponse) => {
    if (results === 'tie') return;
    if (results === 'win') {
      setScore((prev) => ({ ...prev, player: prev.player++ }));
    } else {
      setScore((prev) => ({ ...prev, computer: prev.computer++ }));
    }
  };

  const resetScore = () => {
    setScore({ player: 0, computer: 0 });
  };

  const onClick = (player: number) => {
    play({ player }).catch((err: unknown) => {
      console.error(err);
    });
  };

  const renderResult = () => {
    if (isPlayLoading) {
      return <>Loading</>;
    }

    if (playError) {
      return <em className='leading-10 text-red-500'>{playError}</em>;
    }

    if (!playResponse?.results) {
      return <em className='leading-10'>Play a game!</em>;
    }

    return <Result response={playResponse} choices={choices || []} />;
  };

  if (isChoicesLoading) {
    return <>Loading</>;
  }

  if (choicesError) {
    return <em className='leading-10 text-red-500'>{choicesError}</em>;
  }

  return (
    <>
      <Score score={score} resetScore={resetScore} />
      <h2>Make your choice</h2>
      <div className='flex flex-wrap gap-4'>
        {choices?.map(({ id, name }) => (
          <Button
            disabled={isPlayLoading}
            key={id}
            onClick={() => {
              onClick(id);
            }}
            className='flex-1'
          >
            {name}
          </Button>
        ))}
      </div>
      {renderResult()}
    </>
  );
};
