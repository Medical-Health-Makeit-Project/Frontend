export const productAdapter = (products) => {
  if (Array.isArray(products)) {
    return products.map((product) => {
      return {
        id: product.id,
        product: product.product,
        label: product.label,
        description: product.description,
        price: product.price / 100,
        stock: product.stock,
        dose: product.dose,
        image: product.image,
        discount: product.discount,
        category: product.category,
      };
    });
  }
  return {
    id: products.id,
    product: products.product,
    label: products.label,
    description: products.description,
    price: products.price,
    stock: products.stock,
    dose: products.dose,
    image: products.image,
    discount: products.discount,
    category: products.category,
  };
};
