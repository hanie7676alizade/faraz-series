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
  duration = 10000,
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
