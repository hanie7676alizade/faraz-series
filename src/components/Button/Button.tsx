import React from "react";
import styles from "./Button.module.scss";
import { cva } from "class-variance-authority";
import { ButtonVariant, ButtonSize } from "./constant";

interface ButtonProps {
  onClick: () => void;
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.MD,
}) => {
  const buttonClassName = cva([""], {
    variants: {
      size: {
        [ButtonSize.SM]: styles["btn--sm"],
        [ButtonSize.MD]: styles["btn--md"],
      },
      variant: {
        [ButtonVariant.PRIMARY]: styles["btn--primary"],
        [ButtonVariant.SECONDARY]: styles["btn--secondary"],
        [ButtonVariant.ERROR]: styles["btn--danger"],
      },
    },
  });

  return (
    <button className={buttonClassName({ variant, size })} onClick={onClick}>
      {text}
    </button>
  );
};
