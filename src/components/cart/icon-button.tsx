import React, { MouseEvent } from "react";

const IconBtnBase =
  "flex items-center justify-center outline-none transition-colors duration-250 ease-in-out";

type Props = {
  className?: string;
  children: React.ReactNode | undefined;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const defaultProps = {
  className: "",
  disabled: false,
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;

export type IconButtonProps = Props & NativeAttrs;

const IconButton: React.FC<IconButtonProps> = ({
  className,
  children,
  disabled,
  onClick,
}) => {
  const classNames = IconBtnBase + " " + className;

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick && onClick(event);
  };

  return (
    <button onClick={onClickHandler} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
};

IconButton.defaultProps = defaultProps;

export default IconButton;
