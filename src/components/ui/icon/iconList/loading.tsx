import { IconProps } from "../Icon";
import { IconSizeEnum } from "../enums";

export function Loading(props: IconProps) {
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
          d="M8.15159 2V3.51899M8.15159 11.5696V14M4.35412 7.92405H2.22754M13.7718 7.92405H12.8605M12.0749 11.8474L11.6453 11.4177M12.2007 3.92352L11.3415 4.78278M3.85077 12.2249L5.56931 10.5063M3.97661 3.79768L5.26551 5.08658"
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
          d="M10.1958 2.25V4.21203M10.1958 14.6108V17.75M5.29078 9.9019H2.54395M17.4553 9.9019H16.2781M15.2634 14.9695L14.7085 14.4146M15.426 4.73454L14.3161 5.84443M4.64062 15.4571L6.8604 13.2373M4.80316 4.572L6.468 6.23684"
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
          d="M12.25 2.125V4.625M12.25 17.875V21.875M6 11.875H2.5M21.5 11.875H20M18.7071 18.3321L18 17.625M18.9142 5.29079L17.5 6.705M5.17157 18.9534L8 16.125M5.37868 5.08368L7.5 7.205"
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
