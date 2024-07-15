import { useCallback, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Choice } from '../../types/choice';
import { PlayResponse } from '../../types/play';
import { Button } from '../button/Button';
import { Result } from '../result/Result';
import { MemoScore } from '../score/Score';
import { Score as ScoreType } from '../../types/score';
import { AppSkeleton } from '../skeleton/AppSkeleton';
import { PlaySkeleton } from '../skeleton/PlaySkeleton';
import { History } from '../score/History';

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
    reset,
  } = useFetch<PlayResponse>({
    method: 'POST',
    url: 'play',
    onSuccess: (response) => {
      updateScore(response);
      setHistory([response, ...history]);
    },
  });

  const [score, setScore] = useState<ScoreType>({
    player: 0,
    computer: 0,
  });
  const [history, setHistory] = useState<PlayResponse[]>([]);

  const updateScore = (res: PlayResponse) => {
    if (res.results === 'tie') return;
    if (res.results === 'win') {
      setScore((prev) => {
        return {
          ...prev,
          player: prev.player++,
        };
      });
    } else {
      setScore((prev) => ({
        ...prev,
        computer: prev.computer++,
      }));
    }
  };

  const resetScore = useCallback(() => {
    setScore({ player: 0, computer: 0 });
    setHistory([]);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelection = (player: number) => {
    play({ player }).catch((err: unknown) => {
      console.error(err);
    });
  };

  const renderResult = () => {
    if (isPlayLoading) {
      return <PlaySkeleton />;
    }

    if (playError) {
      return <em className='text-red-500'>{playError}</em>;
    }

    if (!playResponse?.results) {
      return <em className='text-center'>Play a round to get going!</em>;
    }

    return <Result response={playResponse} choices={choices || []} />;
  };

  if (isChoicesLoading) {
    return <AppSkeleton />;
  }

  if (choicesError) {
    return <em className='text-red-500'>{choicesError}</em>;
  }

  return (
    <>
      <h3>Make your choice</h3>
      <div className='flex flex-wrap gap-4'>
        {choices?.map(({ id, name }) => (
          <Button
            disabled={isPlayLoading}
            key={id}
            onClick={() => {
              onSelection(id);
            }}
            className='flex-1 capitalize'
          >
            {name}
          </Button>
        ))}
      </div>
      <MemoScore
        isPlayLoading={isPlayLoading}
        score={score}
        resetScore={resetScore}
      />
      {renderResult()}
      <History history={history} choices={choices || []} />
    </>
  );
};
