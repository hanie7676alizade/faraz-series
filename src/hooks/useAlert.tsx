import {
  ReactNode,
  createContext,
  PropsWithChildren,
  useState,
  useContext,
} from "react";
import {
  SnackbarType,
  IconNameEnum,
  Snackbar,
  SnackbarProps,
} from "../components";

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

  const triggerSnackbar = (
    text: string,
    type: SnackbarType,
    counter?: number,
    icon?: IconNameEnum,
    trailing?: ReactNode
  ) => {
    setSnackbarData({
      message: text,
      duration: counter,
      timer: !!counter,
      type,
      icon,
      trailing,
    });
    setOpen(true);
  };
  const openAlert = (
    text: string,
    type: SnackbarType = SnackbarType.DEFAULT,
    counter?: number,
    icon?: IconNameEnum,
    action?: ReactNode
  ) => {
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

  if (!AlertContext) {
    throw new Error("alert context is not provided");
  }
  return { openAlert, closeAlert };
};
