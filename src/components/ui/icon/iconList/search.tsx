import { IconProps } from "../Icon";
import { IconSizeEnum } from "../enums";

export function Search(props: IconProps) {
  const { color, size = IconSizeEnum.MD } = props;
  const icon = {
    [IconSizeEnum.SM]: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        className={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14L11.6667 11.6667M13.3333 7.66667C13.3333 10.7963 10.7963 13.3333 7.66667 13.3333C4.53705 13.3333 2 10.7963 2 7.66667C2 4.53705 4.53705 2 7.66667 2C10.7963 2 13.3333 4.53705 13.3333 7.66667Z"
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
          d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
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
          d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
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
