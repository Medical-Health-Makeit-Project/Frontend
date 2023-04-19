export const categoryAdapter = (categories) => {
  if (Array.isArray(categories)) {
    return categories.map(({ id, category }) => {
      return {
        id: id,
        category: category,
      };
    });
  }
  return {
    id: categories.id,
    category: categories.category,
  };
};
