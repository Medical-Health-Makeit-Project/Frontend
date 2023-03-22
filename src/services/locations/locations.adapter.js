export const locationsAdapter = (response) => {
  if (Array.isArray(response)) {
    return response.map((element) => {
      return {
        id: element.id,
        country: element.country,
        locations: element.locations,
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
