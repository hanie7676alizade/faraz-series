import React from "react";
import { Icon, IconNameEnum, IconSizeEnum } from "../icon";

interface SpinnerProps {
  size?: IconSizeEnum;
  color?: SpinnerColorEnum;
}
export enum SpinnerColorEnum {
  DEFAULT = "text-gray-500",
  RED = "text-red-500",
  LIGHT = "text-gray-200",
  DARK = "text-gray-800",
  WARNING = "text-yellow-500",
  SUCCESS = "text-green-500",
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = IconSizeEnum.MD,
  color = SpinnerColorEnum.DEFAULT,
}) => {
  return (
    <div className="w-full flex justify-center items-center">
      <Icon
        name={IconNameEnum.LOADING}
        size={size}
        color="currentColor"
        className={`animate-spin ${color}`}
      />
    </div>
  );
};
