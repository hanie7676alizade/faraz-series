import { SerialType } from "../types/types";

export function toDate(time: number | undefined | null) {
  if (!time) return new Date().toLocaleDateString("fa");
  return new Date(time).toLocaleDateString("fa");
}

export function toPersianDate(time: number | undefined) {
  if (!time) return "";
  const date = new Date(time);
  const persianDate = {
    day: getDateFormat(date, { day: "2-digit" }),
    month: getDateFormat(date, { month: "numeric" }),
    monthTitle: getDateFormat(date, { month: "long" }),
    year: getDateFormat(date, { year: "numeric" }),
    dayWeek: getDateFormat(date, { weekday: "long" }),
  };

  return `${persianDate.dayWeek} ${persianDate.day} ${persianDate.monthTitle} ${persianDate.year}`;
}

function getDateFormat(
  uDate: number | Date | undefined,
  option: Intl.DateTimeFormatOptions | undefined
) {
  const date = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
  return date;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapToSerialType = (data: any[]): SerialType[] => {
  return data.map((_item) => {
    const item = _item.show ?? _item;
    console.log({ item });
    return {
      id: item.id,
      name: item.name,
      genres: item.genres,
      image: item.image ? item.image.medium : "",
      summary: item.summary,
      imdb: item.rating ? item.rating.average : 0,
      ended: item.ended,
    };
  });
  // return {};
};
