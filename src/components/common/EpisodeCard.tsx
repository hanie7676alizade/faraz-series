import React from "react";

import { Typography, TextVariantEnum } from "..";
import { EpisodeType } from "../../types/types";

interface EpisodeCardProps {
  episode: EpisodeType;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  episode,
  index,
  onClick,
  isSelected,
}) => {
  return (
    <div
      dir="rtl"
      className={`relative w-full flex gap-4 py-1 px-4 text-gray-800 items-start justify-between rounded-xl shadow-sm bg-gray-200 p-2 hover:shadow-lg transition-all cursor-pointer ${
        isSelected ? "h-fit" : "h-24"
      }`}
      onClick={onClick}
    >
      <img
        className={`w-20 h-20 object-cover rounded-md mt-1 transition-all ${
          isSelected ? "w-[9rem] h-[9rem]" : "h-20 w-20"
        }`}
        src={episode.image}
        alt={String(index + 1)}
      />
      <div className="w-full flex-col gap-8 mt-7 mb-3 items-center">
        <div className="flex items-center justify-between">
          <Typography
            text={"قسمت " + (index + 1) + " - " + episode.name}
            variant={TextVariantEnum.TITLE_3}
            color="text-gray-700"
          />
          <Typography
            text={"imdb : " + episode.imdb}
            variant={TextVariantEnum.BODY_5}
            color="text-gray-700"
          />
        </div>
        {isSelected ? (
          <>
            <Typography
              text={"خلاصه داستان : "}
              variant={TextVariantEnum.BODY_3}
              color="text-gray-700"
            />
            <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </>
        ) : null}
      </div>
    </div>
  );
};
