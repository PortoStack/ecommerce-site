import products from "../database/product.test.json";

export const getProduct = async () => {
  return await products;
}

export const getProductById = async (id?: string) => {
  return await products.filter((product) => product.id.toString() === id)[0];
}

export const getProductByCategory = async (category?: string) => {
  return await products.filter((product) => product.category.toLowerCase() === category?.toLowerCase());
}