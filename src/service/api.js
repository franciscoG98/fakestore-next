export const getAllProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products;
};

export const getSingleProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return product;
};

export const getCategories = async (id) => {
  const res = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await res.json();
  return categories;
};

export const getCategoryProducts = async (category) => {
  const res = await fetch(`https://fakestoreapi.com/products/${category}`);
  const categoryProducts = await res.json();
  return categoryProducts;
};
