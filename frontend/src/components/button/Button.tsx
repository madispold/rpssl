import clsx from 'clsx';

export type ButtonVariant = 'default' | 'secondary';

const buttonVariants = (variant: ButtonVariant) => {
  return variant === 'default'
    ? 'border-sky-900 hover:border-sky-600 bg-sky-100 hover:bg-white'
    : 'border-sky-600 hover:border-sky-900 hover:bg-sky-100';
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
        'h-10 px-2 py-1 border border-solid rounded-sm disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none',
        className,
        buttonVariants(variant)
      )}
    >
      {children}
    </button>
  );
};
