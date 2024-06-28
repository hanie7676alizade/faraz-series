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
      className="inline-flex items-center justify-center rounded-full p-2 transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-200 active:bg-gray-300"
      onClick={onClick}
    >
      <Icon name={iconName} color={color} size={size} />
    </button>
  );
};
