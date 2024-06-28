import { Icon, IconNameEnum, IconSizeEnum } from "../icon";

interface IconButtonProps {
  iconName: IconNameEnum;
  color?: string;
  size?: IconSizeEnum;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  color = "currentColor",
  size = IconSizeEnum.MD,
  onClick,
}) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-full p-1 transition duration-300 ease-in-out transform bg-opacity-50 shadow-sm hover:shadow-lg"
      onClick={onClick}
    >
      <Icon name={iconName} color={color} size={size} />
    </button>
  );
};
