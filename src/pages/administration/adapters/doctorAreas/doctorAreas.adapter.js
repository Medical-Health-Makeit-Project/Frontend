export const doctorAreasAdapter = (response) => {
  if (Array.isArray(response)) {
    return response.map(({ id, area, price, doctors }) => {
      return {
        id: id,
        area: area,
        price: price,
        doctors: doctors,
      };
    });
  } else {
    return {
      id: response.id,
      area: response.area,
      price: response.price,
      doctors: response.doctors,
    };
  }
};
