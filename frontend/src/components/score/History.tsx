import { useMemo } from 'react';
import { Choice } from '../../types/choice';
import { PlayResponse } from '../../types/play';
import { getParsedResult } from '../../utils/result';

export type HistoryProps = {
  history: PlayResponse[];
  choices: Choice[];
};

export const History = ({ history, choices }: HistoryProps) => {
  const parsedHistory = useMemo(
    () => history.map((elem) => getParsedResult(elem, choices)),
    [history, choices]
  );

  if (!history.length) {
    return <></>;
  }

  return (
    <>
      <h3>History</h3>
      <ul>
        {parsedHistory.map((entry, index) => (
          <li key={index}>
            <span className='capitalize'>{entry.player?.name}</span>
            <span> VS </span>
            <span className='capitalize'>{entry.computer?.name}</span>
            <span> - </span>
            <span className='capitalize'>{entry.resultString}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
