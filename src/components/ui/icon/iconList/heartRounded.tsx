import { IconProps } from "../Icon";
import { IconSizeEnum } from "../enums";

export function HeartRounded(props: IconProps) {
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
          d="M10.4667 2.6001C12.58 2.6001 14 4.6116 14 6.4881C14 10.2883 8.10667 13.4001 8 13.4001C7.89333 13.4001 2 10.2883 2 6.4881C2 4.6116 3.42 2.6001 5.53333 2.6001C6.74667 2.6001 7.54 3.21435 8 3.75435C8.46 3.21435 9.25333 2.6001 10.4667 2.6001Z"
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
          d="M13.0833 3.25C15.725 3.25 17.5 5.76438 17.5 8.11C17.5 12.8603 10.1333 16.75 10 16.75C9.86667 16.75 2.5 12.8603 2.5 8.11C2.5 5.76438 4.275 3.25 6.91667 3.25C8.43333 3.25 9.425 4.01781 10 4.69281C10.575 4.01781 11.5667 3.25 13.0833 3.25Z"
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
          d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z"
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
