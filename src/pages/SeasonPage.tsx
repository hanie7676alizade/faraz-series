import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { getSerialById } from "../services/series";
// import { useAlert, useLoading } from "../hooks";
// import { FavoriteItem } from "../types/types";

import { useAppSelector } from "../redux/redux-hook";
import { EpisodeType } from "../types/types";
import { useAlert, useLoading } from "../hooks";
import { getAllEpisode } from "../services/episode";
import { EpisodeCard } from "../components";
// import { setFavoriteSerialList } from "../redux/serial/slice";
// import { getAllEpisode } from "../services/episode";

const SerialPage = () => {
  const [episodeList, setEpisodeList] = useState<EpisodeType[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<number | undefined>(
    undefined
  );

  const params = useParams();

  const { openAlert } = useAlert();
  const { setLoading } = useLoading();

  // const dispatch = useAppDispatch();
  const favoriteSerialList = useAppSelector(
    (state) => state.Serial.favoriteSerialList
  );

  useEffect(() => {
    getSeasons();
  }, [params]);

  const getSeasons = async () => {
    if (params.serial_id && params.season_number) {
      const season_number = Number(params.season_number);
      const response = await getAllEpisode(
        params.serial_id,
        openAlert,
        handleLoading
      );
      if (response && season_number) {
        const episodes = response[season_number - 1];
        setEpisodeList(episodes ?? []);
      }
    }
  };

  const handleLoading = (isLoading: boolean) => {
    setLoading(isLoading, true);
  };

  if (episodeList)
    return (
      <div dir="ltr" className="flex flex-col gap-6 py-10 px-40 ">
        <div className="w-full max-w-[800px] m-auto flex flex-col gap-2">
          {episodeList.map((item, index) => (
            <EpisodeCard
              key={item.id}
              isSelected={selectedEpisode === index}
              episode={item}
              index={index}
              onClick={() => {
                setSelectedEpisode(index);
              }}
            />
          ))}
        </div>
      </div>
    );
  return null;
};
export default SerialPage;
