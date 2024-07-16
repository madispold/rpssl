import { useCallback, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Choice } from '../../types/choice';
import { PlayResponse } from '../../types/play';
import { Button } from '../button/Button';
import { Result } from '../result/Result';
import { Score } from '../score/Score';
import { Score as ScoreType } from '../../types/score';
import { AppSkeleton } from '../skeleton/AppSkeleton';
import { PlaySkeleton } from '../skeleton/PlaySkeleton';
import { History } from '../history/History';

export const ROUND_TARGET = 5;

export const Play = () => {
  const [score, setScore] = useState<ScoreType>({
    player: 0,
    computer: 0,
    isWon: false,
  });
  const [history, setHistory] = useState<PlayResponse[]>([]);

  const {
    isLoading: isChoicesLoading,
    error: choicesError,
    response: choices,
  } = useFetch<Choice[]>({ method: 'GET', url: 'choices', initialize: true });

  const onSuccessfulRound = (res: PlayResponse) => {
    updateScore(res);
    setHistory([res, ...history]);
  };

  const {
    isLoading: isPlayLoading,
    error: playError,
    response: playResponse,
    request: play,
    reset,
  } = useFetch<PlayResponse>({
    method: 'POST',
    url: 'play',
    onSuccess: onSuccessfulRound,
  });

  const updateScore = (res: PlayResponse) => {
    if (res.results === 'tie') return;
    if (res.results === 'win') {
      setScore({
        computer: score.computer,
        player: score.player + 1,
        isWon: Boolean(score.player + 1 >= ROUND_TARGET),
      });
    } else {
      setScore({
        computer: score.computer + 1,
        player: score.player,
        isWon: Boolean(score.computer + 1 >= ROUND_TARGET),
      });
    }
  };

  const resetScore = useCallback(() => {
    setScore({ player: 0, computer: 0, isWon: false });
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
      <p>
        Win <strong>{ROUND_TARGET}</strong> rounds to win it all!
      </p>
      <div className='flex flex-wrap gap-4'>
        {choices?.map(({ id, name }) => (
          <Button
            disabled={isPlayLoading || score.isWon}
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
      <Score
        isPlayLoading={isPlayLoading}
        score={score}
        resetScore={resetScore}
      />
      {renderResult()}
      <History history={history} choices={choices || []} />
    </>
  );
};
