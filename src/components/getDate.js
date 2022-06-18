export const getDate = () => {
  const dte = new Date();
  let currentMonth = dte.getMonth() + 1;
  if (currentMonth < 9) currentMonth = "0" + currentMonth;
  currentMonth = currentMonth.toString();
  let currentYear = dte.getFullYear();
  currentYear = currentYear.toString();
  let dateCheck = `${currentYear}-${currentMonth}`;
  return dateCheck;
};

export const getMaxFutureGrad = () => {
  const dte = new Date();
  let currentYear = dte.getFullYear();
  let futureYear = currentYear + 6;
  futureYear = futureYear.toString();

  let maxDate = `${futureYear}-${12}`;
  return maxDate;
};
