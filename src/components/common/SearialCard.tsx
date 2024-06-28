import React from "react";
import { Typography, TextVariantEnum } from "../ui/typography";
import { SerialType } from "../../types/types";

interface SerialCardProps {
  serial: SerialType;
}

const SerialCard: React.FC<SerialCardProps> = ({ serial }) => {
  return (
    <div className="relative w-[220px] h-[315px] rounded-xl overflow-hidden shadow-lg group">
      <img
        className="w-full h-full object-cover"
        src={serial.image}
        alt={serial.name}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 text-white flex items-end p-4 group-hover:opacity-0">
        <Typography text={serial.name} variant={TextVariantEnum.TITLE_2} />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end">
        <Typography text={serial.name} variant={TextVariantEnum.TITLE_2} />
        <div className="flex gap-1">
          <Typography text="ژانرها:" variant={TextVariantEnum.BODY_4} />
          <Typography
            text={serial.genres.join(", ")}
            variant={TextVariantEnum.BODY_4}
          />
        </div>
        <div className="flex gap-1">
          <Typography text="امتیاز IMDB:" variant={TextVariantEnum.BODY_4} />
          <Typography
            text={String(serial.imdb)}
            variant={TextVariantEnum.BODY_4}
          />
        </div>
        <div className="flex gap-1">
          <Typography text="تاریخ انتشار:" variant={TextVariantEnum.BODY_4} />
          <Typography text={serial.ended} variant={TextVariantEnum.BODY_4} />
        </div>
      </div>
    </div>
  );
};

export default SerialCard;
