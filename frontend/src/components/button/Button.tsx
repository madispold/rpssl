import clsx from "clsx";

export type ButtonVariant = "default" | "secondary";

const buttonVariants = (variant: ButtonVariant) => {
  return variant === "default"
    ? "px-2 py-1 border-sky-600 hover:border-sky-900 hover:bg-sky-50"
    : "px-2 py-1 border-sky-900 hover:border-sky-600 bg-sky-100 hover:bg-white";
};

export type ButtonProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  variant = "default",
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
        "border border-solid rounded-sm disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
        className,
        buttonVariants(variant)
      )}
    >
      {children}
    </button>
  );
};
