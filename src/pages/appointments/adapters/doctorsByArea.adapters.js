export const doctorsByAreaAdapter = (response) => {
  if (Array.isArray(response)) {
    return response.map(({ id, area, doctors, price }) => {
      return {
        id: id,
        area: area,
        doctors: doctors,
        price: price,
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
