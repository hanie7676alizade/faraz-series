import {
  ReactNode,
  createContext,
  PropsWithChildren,
  useState,
  useContext,
} from "react";
import { SnackbarType, IconNameEnum, Snackbar } from "../components";
import { SnackbarProps } from "../components/common/snackbar/Snackbar";

export const defaultInterval = 250;
export const defaultDuration = 5000;

type SnackbarData = Omit<SnackbarProps, "handleClose" | "open" | "closable">;

type AlertContextType = {
  openAlert: (
    text: string,
    type: SnackbarType,
    counter?: number,
    icon?: IconNameEnum,
    action?: ReactNode
  ) => void;
  closeAlert: () => void;
};
export const AlertContext = createContext<AlertContextType>({
  closeAlert: () => null,
  openAlert: () => null,
});
export function AlertProvider(props: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const [snackbarData, setSnackbarData] = useState<SnackbarData | undefined>(
    undefined
  );

  // const [text, setText] = useState<string>("");
  // const [duration, setDuration] = useState<number>(defaultDuration);
  // const [type, setType] = useState<SnackbarType>(SnackbarType.DEFAULT);
  // const [timer, SetTimer] = useState(false);
  // const [countingHandle, setCountingHandle] = useState<any>(undefined);
  // const [icon, setIcon] = useState<IconNameEnum | undefined>();
  // const [trailing, setTrailing] = useState<ReactNode | undefined>();
  const triggerSnackbar = (
    text: string,
    type: SnackbarType,
    counter?: number,
    icon?: IconNameEnum,
    trailing?: ReactNode
    // position: PositionsEnum,
    // style: React.CSSProperties,
    // closeStyle: React.CSSProperties
  ) => {
    // const color = getSnackColor(type);
    setSnackbarData({
      message: text,
      duration: counter,
      timer: !!counter,
      type,
      icon,
      trailing,
    });
    setOpen(true);

    // setText(text);
    // setType(type);
    // SetTimer(
    //   timer !== undefined && (typeof timer === "boolean" ? timer : timer > 0)
    // );
    // setIcon(icon);
    // setTrailing(trailing);
    // if (timer !== undefined && timer) {
    // setDuration(typeof timer === "boolean" ? defaultDuration : timer);
    // setCountingHandle(
    //   setTimeout(
    //     () => setOpen(false),
    //     typeof timer === "boolean" ? defaultDuration : timer
    //   )
    // );
    // } else {
    // setDuration(defaultDuration);
    // }
    // setDuration(duration);
    // setPosition(position);
    // setCustomStyles({
    //   backgroundColor: color,
    // });
    // setCloseCustomStyles(closeStyle);
  };
  const openAlert = (
    text: string,
    type: SnackbarType = SnackbarType.DEFAULT,
    counter?: number,
    icon?: IconNameEnum,
    action?: ReactNode
  ) => {
    // clearTimeout(countingHandle);
    if (open === true) {
      closeAlert();
      setTimeout(() => {
        triggerSnackbar(text, type, counter, icon, action);
      }, 250);
    } else {
      triggerSnackbar(text, type, counter, icon, action);
    }
  };
  const closeAlert = () => {
    setOpen(false);
  };

  return (
    <AlertContext.Provider value={{ openAlert, closeAlert }}>
      {props.children}
      <Snackbar
        open={open}
        message={snackbarData?.message ?? ""}
        handleClose={() => setOpen(false)}
        type={snackbarData?.type}
        icon={snackbarData?.icon}
        duration={snackbarData?.duration}
        timer={!!snackbarData?.duration}
        closable={!snackbarData?.duration}
        trailing={snackbarData?.trailing}
      />
    </AlertContext.Provider>
  );
}

export const useAlert = () => {
  const { openAlert, closeAlert } = useContext(AlertContext);

  // function close() {
  //   closeAlert();
  // }
  // function open(
  //   text: string,
  //   type: SnackbarType = SnackbarType.DEFAULT,
  //   counter?: number,
  //   icon?: IconNameEnum,
  //   action?: ReactNode
  // ) {
  //   openAlert(text, type, counter, icon, action);
  // }
  if (!AlertContext) {
    throw new Error("alert context is not provided");
  }
  return { openAlert, closeAlert };
};
