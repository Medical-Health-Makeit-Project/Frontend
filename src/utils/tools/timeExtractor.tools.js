export const timeExtractor = (time) => {
  const regExTime = /([0-9]?[0-9]):([0-9][0-9])/;
  return regExTime.exec(time)[1];
};
