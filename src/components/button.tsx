import React, { MouseEvent } from "react";
import { ButtonVariants, ButtonSizes } from "./utils/prop-types";
import {
  ButtonBase,
  ButtonDisable,
  ButtonVariant,
  ButtonSize,
} from "./utils/theme";
import Loader from "components/loader";

interface Props {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  type?: React.ButtonHTMLAttributes<any>["type"];
  children: React.ReactNode | undefined;
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const defaultProps = {
  variant: "primary" as ButtonVariants,
  size: "normal" as ButtonSizes,
  type: "button" as React.ButtonHTMLAttributes<any>["type"],
  loading: false,
  disabled: false,
};

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>;

export type ButtonProps = Props & NativeAttrs;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className,
  loading,
  variant = "primary",
  size = "normal",
  type,
  children,
  disabled,
  onClick,
  ...props
}) => {
  const classNames =
    ButtonBase +
    " " +
    (disabled === true ? ButtonDisable : ButtonVariant[variant]) +
    " " +
    ButtonSize[size] +
    " " +
    className;

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;
    onClick && onClick(event);
  };

  return (
    <button
      onClick={onClickHandler}
      className={classNames}
      disabled={disabled}
      type={type}
      aria-label={type}
      {...props}
    >
      {!loading && children}
      {loading && <Loader />}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
