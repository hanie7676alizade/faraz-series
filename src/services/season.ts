import axios from "../axiosConfig";
import { mapToSeasonType } from "../utils/helpers";
import { OpenAlertFunction, handleApiRequest } from "./util";

export const getSeasonList = async (
  serialId: number | string,
  openAlert: OpenAlertFunction,
  setLoading: (isLoading: boolean) => void
) => {
  const apiFn = async () => {
    const response = await axios.get(`/shows/${serialId}/seasons`);
    console.log({ response });
    return mapToSeasonType(response.data);
  };

  return handleApiRequest(apiFn, openAlert, setLoading);
};
