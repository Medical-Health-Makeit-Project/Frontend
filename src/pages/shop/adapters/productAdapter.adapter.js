export const productAdapter = (products) => {
  if (Array.isArray(products)) {
    return products.map((product) => {
      return {
        id: product.id,
        product: product.product,
        label: product.label,
        description: product.description,
        price: product.price,
        stock: product.stock,
        quantity: product.quantity,
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
    quantity: products.quantity,
    dose: products.dose,
    image: products.image,
    discount: products.discount,
    category: products.category,
  };
};
