import React from "react";
import { Typography, TextVariantEnum } from "../ui/typography";
import { SerialType } from "../../types/types";

interface SerialCardProps {
  serial: SerialType;
}

const SerialCard: React.FC<SerialCardProps> = ({ serial }) => {
  console.log({ serial });
  return (
    <div
      dir="ltr"
      className="relative w-[130px] h-[230px] rounded-xl overflow-hidden shadow-lg group"
    >
      <img
        className="w-full h-full object-cover"
        src={serial.image}
        alt={serial.name}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 text-white flex items-end p-4 group-hover:opacity-0 text-nowrap">
        <Typography
          text={serial.name}
          variant={TextVariantEnum.SUBTITLE_2}
          ellipsis
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end items-center">
        <Typography text={serial.name} variant={TextVariantEnum.BODY_1} />
        <div className="flex flex-col items-center gap-1">
          <Typography text="ژانرها:" variant={TextVariantEnum.BODY_4} />
          {serial.genres.map((item, index) => (
            <Typography
              text={(index === serial.genres.length - 1 ? "" : ",") + item}
              variant={TextVariantEnum.CAPTION_3}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-1">
          <Typography text="IMDB:" variant={TextVariantEnum.BODY_4} />
          <Typography
            text={String(serial.imdb)}
            variant={TextVariantEnum.CAPTION_1}
          />
        </div>
      </div>
    </div>
  );
};

export default SerialCard;
