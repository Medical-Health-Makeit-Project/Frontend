export const authAdapter = (response) => {
  return {
    ACCESS_TOKEN: response.ACCESS_TOKEN,
  };
};
