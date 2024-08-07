import clsx from 'clsx';

export type ButtonVariant = 'default' | 'secondary' | 'ghost';

const buttonVariants = (variant: ButtonVariant) => {
  if (variant === 'secondary') {
    return 'px-2 border-sky-600 hover:border-sky-900 hover:bg-sky-100 focus:bg-sky-100';
  }
  if (variant === 'ghost') {
    return 'px-1 border-none hover:text-sky-900 focus:text-sky-600';
  }
  return 'px-2 border-sky-900 hover:border-sky-600 bg-sky-100 hover:bg-white focus:bg-white';
};

export type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  variant = 'default',
  children,
  onClick,
  className,
  disabled,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'h-10 py-1 border border-solid rounded-sm disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200',
        className,
        buttonVariants(variant)
      )}
    >
      {children}
    </button>
  );
};
