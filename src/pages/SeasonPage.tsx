import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useAlert, useLoading } from "../hooks";
import { getAllEpisode } from "../services/episode";
import { EpisodeCard } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/redux-hook";
import { setSerialEpisode } from "../redux/serial/slice";

const SerialPage = () => {
  // const [episodeList, setEpisodeList] = useState<EpisodeType[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<number | undefined>(
    undefined
  );

  const params = useParams();

  const { openAlert } = useAlert();
  const { setLoading } = useLoading();

  const dispatch = useAppDispatch();
  const serialEpisode = useAppSelector((state) => state.Serial.serialEpisode);

  useEffect(() => {
    console.log("SSSS useEffect", params);
    const isListEmpty = serialEpisode && serialEpisode.episodeList.length === 0;
    if (!isListEmpty) {
      const hasCorrectEpisodeList =
        serialEpisode.serialId === Number(params.serial_id) &&
        serialEpisode.seasonNumber === Number(params.season_number);
      if (hasCorrectEpisodeList) return;
    }
    getEpisodes();
  }, [params.season_number]);

  useEffect(() => {
    console.log("SSSS useEffect []");
  }, []);

  const getEpisodes = async () => {
    console.log("SSSS", "getEpisodes");

    if (params.serial_id && params.season_number) {
      const season_number = Number(params.season_number);
      const response = await getAllEpisode(
        params.serial_id,
        openAlert,
        handleLoading
      ); //fix unnecessary recalling
      if (response && season_number) {
        // const episodes = response[season_number - 1];
        // setEpisodeList(episodes ?? []);
        dispatch(
          setSerialEpisode({
            episodeList: response,
            serialId: Number(params.serial_id),
            seasonNumber: season_number,
          })
        );
      }
    }
  };

  const handleLoading = (isLoading: boolean) => {
    setLoading(isLoading, true);
  };

  if (serialEpisode.episodeList && serialEpisode.episodeList.length > 0)
    return (
      <div dir="ltr" className="flex flex-col gap-6 py-10 px-40 ">
        <div className="w-full max-w-[800px] m-auto flex flex-col gap-2">
          {serialEpisode.episodeList[Number(params.season_number) - 1].map(
            (item, index) => (
              <EpisodeCard
                key={item.id}
                isSelected={selectedEpisode === index}
                episode={item}
                index={index}
                onClick={() => {
                  setSelectedEpisode(index);
                }}
              />
            )
          )}
        </div>
      </div>
    );
  return null;
};
export default SerialPage;
