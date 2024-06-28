import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSerialById } from "../services/series";
import { useAlert, useLoading } from "../hooks";
import { SeasonType, SerialType } from "../types/types";
import {
  Typography,
  TextVariantEnum,
  IconNameEnum,
  Button,
  ButtonVariant,
  ButtonAppearance,
} from "../components";
import { toPersianDate } from "../utils/helpers";
import { getSeasonList } from "../services/season";
import { SeasonCard } from "../components/common/SeasonCard";

const SerialPage = () => {
  const [serial, setSerial] = useState<SerialType | undefined>(undefined);
  const [seasonList, setSeasonList] = useState<SeasonType[]>([]);

  const params = useParams();

  const { openAlert } = useAlert();
  const { setLoading } = useLoading();

  useEffect(() => {
    getSerial();
    getSeasons();
  }, [params]);

  const getSerial = async () => {
    if (params.id) {
      const response = await getSerialById(params.id, openAlert, handleLoading);
      if (response) setSerial(response);
    }
  };

  const handleLoading = (isLoading: boolean) => {
    setLoading(isLoading, true);
  };

  const getSeasons = async () => {
    if (params.id) {
      const response = await getSeasonList(params.id, openAlert, setLoading);
      setSeasonList(response ?? []);
    }
  };

  if (serial)
    return (
      <div dir="ltr" className="flex flex-col gap-6 py-10 px-40 ">
        <div className="flex gap-2 py-1 ">
          <img
            className="w-[16rem] h-[23rem] object-cover rounded"
            src={serial.image}
            alt={serial.name}
          />
          <div className="flex flex-col gap-5 p-4 min-h-[10rem] justify-between relative">
            <div className="flex gap-3 justify-between items-center">
              <Typography
                text={serial.name}
                variant={TextVariantEnum.TITLE_1}
              />
              <Button
                // onClick={handleIconClick}
                iconName={IconNameEnum.HEART_ROUNDED}
                label={"افزودن به علاقه مندی ها"}
                variant={ButtonVariant.TRANSPARENT}
                appearance={ButtonAppearance.DEFAULT}
                // color={isFavorite ? "stroke-red-600" : undefined}
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: serial.summary }} />
            <div className="flex  items-center gap-1">
              <Typography text="Genres: " variant={TextVariantEnum.BODY_4} />
              {serial.genres.map((item) => (
                <div className="px-4 border border-solid border-gray-300 text-gray-800 bg-gray-400 rounded-md">
                  <Typography text={item} variant={TextVariantEnum.BODY_6} />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <Typography text="IMDB:" variant={TextVariantEnum.BODY_4} />
              <Typography
                text={String(serial.imdb)}
                variant={TextVariantEnum.BODY_5}
              />
            </div>

            <div className="flex items-center gap-1">
              <Typography
                text="تاریخ انتشار :"
                variant={TextVariantEnum.BODY_4}
              />
              <Typography
                text={toPersianDate(new Date(serial.ended).getTime())}
                variant={TextVariantEnum.BODY_4}
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[800px] m-auto flex flex-col gap-2 p-4 border border-solid border-gray-400 rounded-xl">
          {seasonList.map((item, index) => (
            <SeasonCard season={item} index={index} />
          ))}
        </div>
      </div>
    );
  return null;
};
export default SerialPage;
