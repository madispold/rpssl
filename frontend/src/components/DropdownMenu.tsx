import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import IconCaretUp from '../icons/IconCaretUp';
import IconCaretDown from '../icons/IconCaretDown';
import { Button } from './Button';

export type DropdownMenuProps = {
  title: string;
  children: ReactNode;
  visible?: boolean;
};

const DropdownMenu = ({ children, title, visible }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(() => visible);

  return (
    <>
      <Button
        variant='ghost'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span className='flex items-center text-lg'>
          {title} {isOpen ? <IconCaretUp /> : <IconCaretDown />}
        </span>
      </Button>
      <ul
        className={clsx(
          'overflow-scroll max-h-40 rounded-sm border border-solid border-sky-900 shadow-xl transition-opacity',
          isOpen && 'opacity-100',
          !isOpen && 'opacity-0'
        )}
      >
        {children}
      </ul>
    </>
  );
};

export default DropdownMenu;
