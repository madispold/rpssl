import { useMemo } from 'react';
import { Choice } from '../../types/choice';
import { PlayResponse } from '../../types/play';
import { getParsedResult } from '../../utils/result';
import DropdownMenu from '../dropdown-menu/DropdownMenu';

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
    <DropdownMenu title='View round history' visible={true}>
      {parsedHistory.map((entry, index) => {
        const key = `${entry.player?.id}-${index}-${entry.computer?.id}}`;
        return (
          <li key={key} className='p-1'>
            <span className='capitalize'>{entry.player?.name}</span>
            <span> VS </span>
            <span className='capitalize'>{entry.computer?.name}</span>
            <span> - </span>
            <span className='capitalize'>{entry.resultString}</span>
          </li>
        );
      })}
    </DropdownMenu>
  );
};
