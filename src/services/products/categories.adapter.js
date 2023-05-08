export const categoryAdapter = (categories) => {
  if (Array.isArray(categories)) {
    return categories.map(({ id, name }) => {
      return {
        id: id,
        category: name,
      };
    });
  }
  return {
    id: categories.id,
    category: categories.name,
  };
};
