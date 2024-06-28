import { icons } from "./constant";
import { IconNameEnum, IconSizeEnum } from "./enums";

interface Props {
  name: IconNameEnum;
  color?: string;
  size?: IconSizeEnum;
  className?: string;
}

export type IconProps = Omit<Props, "name" | "className">;

export const Icon = ({
  name,
  color = "currentColor",
  size = IconSizeEnum.MD,
  className,
}: Props) => {
  const IconComponent = icons[name] ?? <></>;
  const iconProps = { color, size };
  return (
    <div className={`w-fit h-fit ${className}`}>
      <IconComponent {...iconProps} />
    </div>
  );
};
