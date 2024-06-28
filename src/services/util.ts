import { SnackbarType } from "../components";

export type OpenAlertFunction = (
  text: string,
  type: SnackbarType,
  timer?: number
) => void;

export const handleApiRequest = async <T>(
  apiFn: () => Promise<T>,
  openAlert: OpenAlertFunction,
  setLoading: (isLoading: boolean) => void
): Promise<T | undefined> => {
  setLoading(true);
  try {
    const response = await apiFn();
    console.log({ response }, "Service handleApiRequest");
    return response;
  } catch (error) {
    openAlert("خطا در برقراری ارتباط", SnackbarType.ERROR, 10000);
    console.error("Error handling API request:", error);
    return undefined;
  } finally {
    setLoading(false);
  }
};
