import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography, TextVariantEnum } from "..";
import { SeasonType } from "../../types/types";
import { toPersianDate } from "../../utils/helpers";

interface SeasonCardProps {
  season: SeasonType;
  index: number;
}

export const SeasonCard: React.FC<SeasonCardProps> = ({ season, index }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`season/${season.id}`);
  };
  return (
    <div
      dir="rtl"
      className="relative w-full h-24 flex gap-4 py-1 px-4 text-gray-800 items-center justify-between rounded-xl shadow-sm cursor-pointer bg-gray-200  p-2 hover:shadow-lg"
      onClick={handleNavigate}
    >
      <div className="flex items-center gap-8">
        <img
          className="w-20 h-20 object-cover rounded-md"
          src={season.image}
          alt={String(index + 1)}
        />
        <Typography
          text={"فصل " + (index + 1)}
          variant={TextVariantEnum.TITLE_3}
          color="text-gray-700"
        />
      </div>

      <Typography
        text={"تعداد قسمت ها : " + season.totalEpisode}
        variant={TextVariantEnum.BODY_5}
        color="text-gray-700"
      />
      <Typography
        text={
          "تاریخ انتشار : " + toPersianDate(new Date(season.ended).getTime())
        }
        variant={TextVariantEnum.CAPTION_3}
        color="text-gray-700"
      />
    </div>
  );
};
