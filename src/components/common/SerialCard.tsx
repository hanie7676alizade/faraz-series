import React from "react";
import { Typography, TextVariantEnum } from "../ui/typography";
import { SerialType } from "../../types/types";
import { IconNameEnum, IconSizeEnum } from "../ui/icon";
import { IconButton } from "../ui/iconButton";
import { useNavigate } from "react-router-dom";

interface SerialCardProps {
  serial: SerialType;
  isFavorite?: boolean;
  handleFavorite: (isFavorite: boolean) => void;
}

export const SerialCard: React.FC<SerialCardProps> = ({
  serial,
  isFavorite,
  handleFavorite,
}) => {
  const navigate = useNavigate();
  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleFavorite(!isFavorite);
  };

  const handleNavigate = () => {
    navigate(`serial/${serial.id}`);
  };
  return (
    <div
      dir="ltr"
      className="relative w-[160px] h-[230px] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
      onClick={handleNavigate}
    >
      <img
        className="w-full h-full object-cover"
        src={serial.image}
        alt={serial.name}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30  text-white flex items-end p-2 group-hover:opacity-0 text-nowrap">
        <Typography
          text={serial.name}
          variant={TextVariantEnum.SUBTITLE_2}
          ellipsis
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 text-white px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end items-center">
        <div className="absolute top-3 left-2">
          <IconButton
            onClick={handleIconClick}
            size={IconSizeEnum.LG}
            iconName={IconNameEnum.HEART_ROUNDED}
            color={isFavorite ? "stroke-red-600" : undefined}
          />
        </div>
        <Typography text={serial.name} variant={TextVariantEnum.BUTTON_2} />
        <div className="flex flex-col items-center gap-1">
          <Typography text="ژانرها:" variant={TextVariantEnum.BODY_4} />
          <Typography
            text={serial.genres.join(", ")}
            variant={TextVariantEnum.CAPTION_5}
          />
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
