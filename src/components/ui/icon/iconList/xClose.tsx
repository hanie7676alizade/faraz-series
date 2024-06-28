import { IconProps } from "../Icon";
import { IconSizeEnum } from "../enums";

export function XClose(props: IconProps) {
  const { color, size = IconSizeEnum.MD } = props;
  const icon = {
    [IconSizeEnum.SM]: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12M4 4L12 12"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    [IconSizeEnum.MD]: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 5L5 15M5 5L15 15"
          stroke={color}
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    [IconSizeEnum.LG]: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return icon[size];
}
