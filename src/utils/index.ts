export const dateHandler = (range: string) => {
  const date = new Date();
  const utcOffset = 8;

  range === "week" ? date.setUTCDate(date.getDate() - 6) : date.setUTCDate(1);

  date.setUTCHours(date.getUTCHours() + utcOffset);
  date.setUTCHours(0, 0, 0, 0);
  return date.toISOString();
};

export const toTimestamp = (strDate: string) => {
  const dt = Date.parse(strDate);
  return dt / 1000;
};
