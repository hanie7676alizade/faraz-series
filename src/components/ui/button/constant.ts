import { SpinnerColorEnum } from "../spinner";

export enum ButtonVariant {
  PRIMARY = "primary",
  OUTLINED = "outlined",
  TRANSPARENT = "transparent",
}

export enum ButtonSize {
  SM = "primary",
  MD = "secondary",
}

export enum ButtonAppearance {
  DEFAULT = "default",
  INFORMATIVE = "informative",
  INVERTED = "inverted",
  ERROR = "error",
  WARNING = "warning",
  SUCCESS = "success",
}

export const buttonAppearanceToSpinnerColor = {
  [ButtonAppearance.DEFAULT]: SpinnerColorEnum.DEFAULT,
  [ButtonAppearance.INFORMATIVE]: SpinnerColorEnum.DEFAULT,
  [ButtonAppearance.INVERTED]: SpinnerColorEnum.LIGHT,
  [ButtonAppearance.ERROR]: SpinnerColorEnum.RED,
  [ButtonAppearance.WARNING]: SpinnerColorEnum.WARNING,
  [ButtonAppearance.SUCCESS]: SpinnerColorEnum.SUCCESS,
};
