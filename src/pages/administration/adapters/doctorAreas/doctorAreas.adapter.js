export const doctorAreasAdapter = (response) => {
  if (Array.isArray(response)) {
    return response.map(({ id, area, price, createdAt, updatedAt }) => {
      return {
        id: id,
        area: area,
        price: price,
        createdAt: createdAt,
        updatedAt: updatedAt,
      };
    });
  } else {
    return {
      id: id,
      area: area,
      price: price,
      createdAt: createdAt,
      updatedAt: updatedAt,
    };
  }
};
