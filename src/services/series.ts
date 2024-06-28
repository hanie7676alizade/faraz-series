import axios from "../axiosConfig";
import { SnackbarType } from "../components";
import { mapToSerialType } from "../utils/helpers";

type OpenAlertFunction = (
  text: string,
  type: SnackbarType,
  timer?: number
) => void;

const handleApiRequest = async <T>(
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

export const searchByText = async (
  searchedText: string,
  openAlert: OpenAlertFunction,
  setLoading: (isLoading: boolean) => void
) => {
  const apiFn = async () => {
    const response = await axios.get("/search/shows", {
      params: { q: searchedText },
    });
    return mapToSerialType(response.data);
  };

  return handleApiRequest(apiFn, openAlert, setLoading);
};

export const getSeries = async (
  openAlert: OpenAlertFunction,
  setLoading: (isLoading: boolean) => void
) => {
  const apiFn = async () => {
    const response = await axios.get("/shows");
    return mapToSerialType(response.data);
  };

  return handleApiRequest(apiFn, openAlert, setLoading);
};

export const getSeriesPaginate = async (
  page: number,
  openAlert: OpenAlertFunction,
  setLoading: (isLoading: boolean) => void
) => {
  const apiFn = async () => {
    const response = await axios.get(`/shows?page=${page}`);
    return mapToSerialType(response.data);
  };

  return handleApiRequest(apiFn, openAlert, setLoading);
};
