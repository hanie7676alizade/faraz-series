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
