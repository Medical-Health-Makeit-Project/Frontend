export const categoryAapter = (categories) => {
  if (Array.isArray(categories)) {
    return categories.map((category) => {
      return {
        id: category.id,
        category: category.category,
      };
    });
  }
  return {
    id: categories.id,
    category: categories.category,
  };
};
