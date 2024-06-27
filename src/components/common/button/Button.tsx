import React from "react";
import styles from "./button.module.scss";
import { cva } from "class-variance-authority";
import {
  ButtonVariant,
  ButtonSize,
  ButtonAppearance,
  buttonAppearanceToSpinnerColor,
} from "./constant";
import { Spinner } from "../spinner";
import { IconSizeEnum } from "../icon";
import { Text, TextAlignmentEnum, TextVariantEnum } from "../text";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  variant?: ButtonVariant;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  variant = ButtonVariant.PRIMARY,
  appearance = ButtonAppearance.DEFAULT,
  size = ButtonSize.MD,
  disabled,
  loading,
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
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled}
    >
      {loading ? (
        <Spinner
          size={IconSizeEnum.LG}
          color={buttonAppearanceToSpinnerColor[appearance]}
        />
      ) : (
        <Text
          text={label}
          variant={TextVariantEnum.BODY_5}
          alignment={TextAlignmentEnum.CENTER}
        />
      )}
    </button>
  );
};
