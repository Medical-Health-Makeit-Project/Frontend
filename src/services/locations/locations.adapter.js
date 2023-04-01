export const locationsAdapter = (response) => {
  if (Array.isArray(response)) {
    return response.map(({ id, country, locations }) => {
      return {
        id: id,
        country: country,
        locations: locations,
      };
    });
  } else {
    return {
      id: element.id,
      country: element.country,
      locations: element.locations,
    };
  }
};
