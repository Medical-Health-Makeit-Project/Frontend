export const convertDateToString = (date) => {
  const year = date.getUTCFullYear();
  const month = date.getMonth();
  const day = date.getUTCDate();
  const stringDate = `${day}/${month + 1}/${year}`;
  return stringDate;
};
