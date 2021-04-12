import { DateTime } from "luxon";

export const getCurrentMonth = () => {
  var dt = new Date();
  var month = dt.getMonth();
  var year = dt.getFullYear();
  const firstDayOfMonth = new Date(2021, 10, 0);
  const daysInMonth = new Date(2020, 0, 0).getDate();
  return {
    firstDayOfMonth,
    daysInMonth,
  };
};

export const getPaddingForFullWeek = (firstDayOfMonth) => {
  const orderNumber = new Date(firstDayOfMonth).getDay();
  return orderNumber === 0 ? 6 : orderNumber - 1;
};
