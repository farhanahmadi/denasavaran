export const isEmpty = (products, id) => {
  return !!products.find((item) => item.id === id);
};

export const quantityCheck = (products, id) => {

  const product = products.find((item) => item.id === id);
  if (product && product.quantity === 1) {
    return false;
  } else {
    return product && product.quantity;
  }

};
