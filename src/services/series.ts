import axios from "../axiosConfig";
import { getSerialType, mapToSerialType } from "../utils/helpers";
import { OpenAlertFunction, handleApiRequest } from "./util";

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

export const getSerialById = async (
  serialId: number | string,
  openAlert: OpenAlertFunction,
  setLoading: (isLoading: boolean) => void
) => {
  const apiFn = async () => {
    const response = await axios.get(`/shows/${serialId}`);
    return getSerialType(response.data);
  };

  return handleApiRequest(apiFn, openAlert, setLoading);
};
