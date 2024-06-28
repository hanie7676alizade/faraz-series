import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getSerialById } from "../services/series";
import { useAlert, useLoading } from "../hooks";
import { FavoriteItem, SeasonType, SerialType } from "../types/types";
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
import { useAppDispatch, useAppSelector } from "../redux/redux-hook";
import { getNewFavoriteList } from "../utils/favoriteHelpers";
import { setFavoriteSerialList } from "../redux/serial/slice";

const SerialPage = () => {
  const [serial, setSerial] = useState<SerialType | undefined>(undefined);
  const [seasonList, setSeasonList] = useState<SeasonType[]>([]);

  const params = useParams();

  const { openAlert } = useAlert();
  const { setLoading } = useLoading();

  const dispatch = useAppDispatch();
  const favoriteSerialList = useAppSelector(
    (state) => state.Serial.favoriteSerialList
  );

  useEffect(() => {
    getSerial();
    getSeasons();
  }, [params]);

  useEffect(() => {
    !favoriteSerialList && getFavoriteItems();
  }, []);

  const getFavoriteItems = () => {
    const favorites = localStorage.getItem("favoriteItems");

    if (favorites) {
      const favoriteList: FavoriteItem[] = JSON.parse(favorites);
      dispatch(setFavoriteSerialList(favoriteList));
    }
  };

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

  console.log({ favoriteSerialList });
  const checkIsFavorite = () => {
    if (!favoriteSerialList) return false;
    const itemIndex = favoriteSerialList?.findIndex(
      (item) => item.id === serial?.id
    );
    return itemIndex !== -1;
  };

  const handleFavoriteChange = (beFavorite: boolean, item: SerialType) => {
    const favoriteList = getNewFavoriteList(
      beFavorite,
      favoriteSerialList ?? [],
      item,
      openAlert
    );

    dispatch(setFavoriteSerialList(favoriteList));
  };

  if (serial)
    return (
      <div dir="ltr" className="flex flex-col gap-6 py-10 px-40 ">
        <div className="flex gap-2 py-1 ">
          <img
            className="w-[16rem] h-[23rem] object-cover rounded-md"
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
                onClick={() => {
                  handleFavoriteChange(!checkIsFavorite(), serial);
                }}
                iconName={IconNameEnum.HEART_ROUNDED}
                label={
                  checkIsFavorite()
                    ? "حذف از علاقه مندی ها"
                    : "افزودن به علاقه مندی ها"
                }
                variant={ButtonVariant.TRANSPARENT}
                appearance={
                  checkIsFavorite()
                    ? ButtonAppearance.DEFAULT
                    : ButtonAppearance.ERROR
                }
                // color={checkIsFavorite() ? "stroke-red-600" : undefined}
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
