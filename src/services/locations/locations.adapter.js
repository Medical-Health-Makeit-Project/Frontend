export const locationsAdapter = (response) => {
  if (Array.isArray(response)) {
    return response.map(({ id, country, headquarters }) => {
      return {
        id: id,
        country: country,
        locations: headquarters,
      };
    });
  } else {
    return {
      id: response.id,
      country: response.country,
      locations: response.headquarters,
    };
  }
};
