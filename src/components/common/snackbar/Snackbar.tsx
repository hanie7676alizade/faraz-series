import { isValidElement, ReactNode, useEffect } from "react";

import { Icon, IconNameEnum, IconSizeEnum } from "../icon";
import { CircularTimer } from "./CircularTimer";
import { Text, TextVariantEnum } from "../text";
import { IconButton } from "../iconButton";
import { SnackbarType } from "./enums";

import styles from "./snackbar.module.scss";

export interface SnackbarProps {
  message: string;
  icon?: IconNameEnum;
  closable?: boolean;
  handleClose: () => void;
  open?: boolean;
  type?: SnackbarType;
  timer?: boolean;
  trailing?: ReactNode;
  duration?: number;
}

export const Snackbar = ({
  closable = true,
  message,
  icon = undefined,
  open,
  handleClose,
  type,
  timer = false,
  trailing,
  duration = 60000,
}: SnackbarProps) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [open, duration, handleClose]);

  if (open)
    return (
      <div className={` ${type} ${styles["snackbar__root"]} `}>
        <div className="flex flex-1 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {timer ? (
              <div className={"my-auto flex items-center"}>
                <CircularTimer totalTime={duration} />
              </div>
            ) : icon ? (
              <div className={styles["leading-section"]}>
                <Icon name={icon} size={IconSizeEnum.LG} color="stroke-white" />
              </div>
            ) : (
              <></>
            )}
            <Text text={message} variant={TextVariantEnum.BODY_6} />
          </div>
          {isValidElement(trailing) && (
            <div className="mx-1 my-auto ml-2 flex flex-row">{trailing}</div>
          )}
        </div>
        {closable && !timer && (
          <>
            <hr className={styles["snackbar__divider"]} />

            <div className="my-auto mr-4 flex cursor-pointer items-center justify-center">
              <IconButton
                iconName={IconNameEnum.CLOSE}
                size={IconSizeEnum.LG}
                color="stroke-white"
                onClick={handleClose}
              />
            </div>
          </>
        )}
      </div>
    );
  return <></>;
};
{
  /* <div className={`${type} ${styles["snackbar__root"]} `}>
<div className="flex items-center w-full justify-between gap-4 rem:max-h-[72px]">
  <div className="flex w-full items-center gap-4 py-spacing-75 rem:h-max-[72px]">
    {timer ? (
      <div className={"my-auto flex items-center"}>
        <CircularTimer totalTime={duration} />
      </div>
    ) : icon ? (
      <div className={styles["leading-section"]}>
        <Icon
          name={icon}
          size={IconSizeEnum.LG}
          color="stroke-icon-inverse-default"
        />
      </div>
    ) : (
      <></>
    )}
    <div className="flex w-full rem:max-h-[56px] items-center">
      <Text
        text={message}
        variant={TextVariantEnum.BODY_6}
        className=" flex w-fit !line-clamp-2"
        color="text-text-inverse-default"
      />
    </div>
  </div>
  {isValidElement(trailing) && (
    <div className="mx-spacing-25 my-auto ml-spacing-50 flex flex-row">
      {trailing}
    </div>
  )}
</div>
{closable && !timer && (
  <div className="flex justify-between gap-4 h-full rem:min-h-[60px]">
    <hr className="w-px h-full min-h-14" />
    <div className="flex cursor-pointer items-center justify-center">
      <IconButton
        iconName={IconNameEnum.CLOSE}
        size={IconSizeEnum.LG}
        color="stroke-icon-inverse-default"
        onClick={handleClose}
      />
    </div>
  </div>
)}
</div> */
}

//------------------
