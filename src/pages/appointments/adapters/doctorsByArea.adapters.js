export const doctorsByAreaAdapter = (response) => {
  if (Array.isArray(response)) {
    return response.map((area) => {
      return {
        id: area.id,
        area: area.area,
        doctors: area.doctors,
        price: area.price,
      };
    });
  } else {
    return {
      id: response.id,
      area: response.area,
      doctors: response.doctors,
      price: area.price,
    };
  }
};
