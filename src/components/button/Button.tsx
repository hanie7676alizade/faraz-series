import React from "react";
import styles from "./Button.module.scss";
import { cva } from "class-variance-authority";
import { ButtonVariant, ButtonSize, ButtonAppearance } from "./constant";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  variant = ButtonVariant.PRIMARY,
  appearance = ButtonAppearance.DEFAULT,
  size = ButtonSize.MD,
  disabled,
}) => {
  const buttonClassName = cva([""], {
    variants: {
      disabled: {
        true: styles["btn--disable"],
        false: [""],
      },
      size: {
        [ButtonSize.SM]: styles["btn--sm"],
        [ButtonSize.MD]: styles["btn--md"],
      },
      variant: {
        [ButtonVariant.PRIMARY]: styles["btn--primary"],
        [ButtonVariant.OUTLINED]: styles["btn--outlined"],
        [ButtonVariant.TRANSPARENT]: styles["btn--transparent"],
      },
      appearance: {
        [ButtonAppearance.DEFAULT]: styles["default"],
        [ButtonAppearance.ERROR]: styles["error"],
        [ButtonAppearance.INFORMATIVE]: styles["informative"],
        [ButtonAppearance.INVERTED]: styles["inverted"],
        [ButtonAppearance.SUCCESS]: styles["success"],
        [ButtonAppearance.WARNING]: styles["warning"],
      },
    },
  });
  console.log({
    styles,
    variant,
    size,
    appearance,
    className: buttonClassName({ variant, size, appearance }),
  });

  return (
    <button
      className={buttonClassName({ variant, size, appearance, disabled })}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
