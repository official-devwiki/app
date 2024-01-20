export const dateToString = (date: Date): string => {
  const year = date.getFullYear();
  let month = String(date.getMonth() + 1);
  let day = String(date.getDate());

  if (Number(month) < 10) month = `0${month}`;
  if (Number(day) < 10) day = `0${day}`;
  return `${year}.${month}.${day}`;
};

export const getToday = (): Date => {
  const day = new Date();
  day.setHours(0, 0, 0, 0);
  return day;
};

export const getLastDay = (): Date => {
  const day = new Date();
  const dayOfMonth = day.getDate();
  day.setDate(dayOfMonth - 7);
  return day;
};