import axios from "../axiosConfig";
import { groupEpisodesBySeason } from "../utils/helpers";
import { OpenAlertFunction, handleApiRequest } from "./util";

export const getAllEpisode = async (
  serialId: number | string,
  openAlert: OpenAlertFunction,
  setLoading: (isLoading: boolean) => void
) => {
  const apiFn = async () => {
    const response = await axios.get(`/shows/${serialId}/episodes`);
    console.log({ response }, "EEEE", groupEpisodesBySeason(response.data));
    return groupEpisodesBySeason(response.data);
  };

  return handleApiRequest(apiFn, openAlert, setLoading);
};
